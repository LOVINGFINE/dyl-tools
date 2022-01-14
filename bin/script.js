#!/usr/bin/env node
const commander = require("commander");
const package = require("../package.json");
// import chalk from "chalk";
const inquirer = require("inquirer");
const fs = require("fs");

const config = {
  React: {
    plugins: {
      type: "checkbox",
      name: "plugins",
      message: "选择是否加入的配置？",
      choices: [
        {
          name: "router-helper",
          checked: true,
        },
        {
          name: "dyl-design",
        },
      ],
    },
  },
};
const project = {};

commander.version("v" + package["version"], "-v, --version");

function end() {
  // 开始生成
  createDir();
}
function choiceFrend() {
  const list = [];
  for (let key in config) {
    list.push(key);
  }
  let target = {
    type: "list",
    name: "frend",
    message: "请选择框架",
    choices: list.map((ele, i) => `${ele}`),
  };
  inquirer.prompt([target]).then((answers) => {
    project["frend"] = answers["frend"];
    choicePlugins();
  });
}

function choicePlugins() {
  const plugins = config[project["frend"]]["plugins"];
  inquirer.prompt([plugins]).then((answers) => {
    project["plugins"] = answers["plugins"];
    end();
  });
}

function createDir() {
  const projectName = project["name"];
  fs.mkdir(projectName, (err) => {
    if (!err) {
      // 创建文件夹成功
      console.log(`\r\n成功创建项目 ${projectName}`);
      console.log(`\r\n  cd ${projectName}`);
      console.log("  npm run dev\r\n");
    } else {
      inquirer
        .prompt([
          {
            type: "confirm",
            name: "rename",
            message: `当前目录已存在' ${projectName} '文件夹,要修改项目名称继续吗? `,
            default: false,
          },
        ])
        .then((answers) => {
          if (answers["rename"]) {
            inputName();
          }
        });
    }
  });
}

function inputName() {
  const rename = project["name"];
  const input = !!rename
    ? {
        type: "input",
        name: "name",
        message: `请重新输入项目名称:`,
      }
    : {
        type: "input",
        name: "name",
        message: "请输入项目名称:",
      };
  inquirer.prompt([input]).then((answers) => {
    project["name"] = answers["name"];
    if (!rename) {
      choiceFrend();
    } else {
      end();
    }
  });
}

commander
  .command("create")
  .description("新建项目")
  .action(() => {
    inputName();
  });

commander.parse(process.argv);
