const fs = require("fs");
const Path = require("path");
const appDirectory = fs.realpathSync(process.cwd());
const resolveApp = (relativePath) => Path.resolve(appDirectory, relativePath);
const defaultSetting = {
  types: ["svg", "png", "jpg", "jpeg", "gif", "ico"],
  write: {
    name: "index.ts",
    forder: "",
    path: "",
  },
  isDelete: true,
  read: "./",
  isForder: false,
};

class WrittenExportFile {
  constructor(options) {
    this.types = options.types || defaultSetting.types;
    this.writeOptions = options.write || defaultSetting.write;
    this.readPath = resolveApp(options.read);
    this.isDelete = options.isDelete || defaultSetting.isDelete;
    this.isForder = options.isForder || defaultSetting.isForder;
    this.list = this.read();
  }
  // 获取文件导入地址
  getLocalPath = (forder, path) => {
    const writeOptions = this.writeOptions;
    return writeOptions.forder + Path.join(writeOptions.forder + forder, path);
  };
  // 首字母大写
  tarformUp = (text) => {
    return text ? text.charAt(0).toUpperCase() + text.slice(1) : "";
  };

  // 获取 模块名
  getName = (forderPath = "", file, isName = false) => {
    const { tarformUp } = this;
    const reg = /^[_a-zA-Z$][_a-zA-Z0-9$]*$/;
    let ls = file.split(".");
    let fls = forderPath.split("/");
    let frist = fls[0];
    fls.forEach((ele, i) => {
      if (i > 0 && frist) {
        frist += tarformUp(ele);
      } else {
        frist += ele;
      }
    });
    let name = forderPath ? tarformUp(ls[0]) : ls[0];
    let last = tarformUp(ls[ls.length - 1]);
    let text = frist + name + last;
    if (reg.test(text)) {
      return isName ? tarformUp(name) : text;
    }
    let base64 = new Buffer(frist + name).toString("base64");
    return "_" + base64.replace(/[^\w]*/g, "") + last;
  };

  // 读取文件信息
  read() {
    const { readPath, types, getName, getLocalPath, isForder } = this;
    let list = [];
    const readFile = (dir, forder = "") => {
      let arr = fs.readdirSync(dir);
      arr.forEach((item) => {
        if (isForder) {
          if (getName(forder, item, true) !== "Index") {
            list.push({
              path: getLocalPath(forder, item),
              name: getName(forder, item, true),
            });
          }
        } else {
          if (fs.statSync(Path.join(dir, item)).isDirectory()) {
            readFile(Path.join(dir, item), forder + "/" + item);
          } else if (
            types.includes(item.split(".")[item.split(".").length - 1])
          ) {
            list.push({
              path: getLocalPath(forder, item),
              name: getName(forder, item),
            });
          }
        }
      });
    };
    readFile(readPath);
    return list;
  }

  // 输出当前进度
  log = (index) => {
    const { list } = this;
    console.clear();
    console.info(
      `######## ${((index / (list.length - 1)) * 100).toFixed(2)}% ########`
    );
  };

  // 写入文件
  written() {
    const { writeOptions, isDelete, list } = this;
    let culpath = resolveApp(writeOptions.path + "/" + writeOptions.name);
    if (fs.existsSync(culpath) && isDelete) {
      fs.unlinkSync(culpath);
    }
    if (list.length === 0) {
      return;
    }
    fs.writeFile(culpath, "", (err) => {
      if (err) {
        console.error(err);
        return;
      }
    });
    let defaultSet = `\r\nexport default {\r\n`;
    let content = "";
    let importRes = "";
    for (let i = 0; i < list.length; i++) {
      importRes += `import ${list[i].name} from '${list[i].path}';\r\n`;
      content += `export { default as ${list[i].name} } from '${list[i].path}';\r\n`;
      defaultSet += `   ${list[i].name},\r\n`;
    }
    defaultSet += "}";
    fs.appendFile(culpath, importRes + "\r\n" + content + defaultSet, (err) => {
      if (err) {
        console.error(err);
        return;
      }
      console.clear();
      console.info(`######## file written successfully ########`);
    });
  }
}
module.exports = WrittenExportFile;
