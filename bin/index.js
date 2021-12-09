#!/usr/bin/env node
const { Command } = require("commander");
const config = require("../package.json");
// // 四种模板。对应我git仓库四个仓库地址
// const tempIndex = {
//   react: "reactTemplate", // react 模板
//   vue: "vueTemplate", // vue 模板
//   h5: "h5Template", // h5模板
//   dva: "dvaTemplate", // dva模板
// };
// let projectName; // 存储目录
// let templateName; // 模板名称
const program = new Command(config["name"])
  .version("v" + config["version"], "-v, --version")
  .arguments("<templateName>")
  .arguments("<projectName>")
  .option("-f, --force", "force delete the exist director")
  .option("-d, --directly", "copy the not specified template")
  .alias("cp")
  .description("create react myProject")
  .action(function (index, name) {
    console.log(index);
    console.log(name);
  });
program.parse(process.argv);
// 没有输入任何参数，报语法错误，并打印help
if (program.args.length === 0) {
  program.help();
}
