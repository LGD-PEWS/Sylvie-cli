#! /usr/bin/env node

// 入口文件

const program = require("commander");
const packageJson = require("../package.json");

program.version(packageJson.version);

program
  // 定义命令和参数
  .command("create <app-name>")
  .description("create a new project") // 添加描述信息
  .option("-f, --force", "overwrite target directory if it exists") // 强制覆盖
  .action((name, options) => {
    // 执行该命令
    require("../lib/create")(name, options);
    // 打印执行结果
    // console.log("name:", name, "options:", options);
  });

program.parse(process.argv);
