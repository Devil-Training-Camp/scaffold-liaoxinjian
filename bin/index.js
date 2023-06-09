#! /usr/bin/env node

const { Command } = require('commander');
// const inquirer = require('inquirer');
const program = new Command();

// const question = [
//   {
//     type:"list", // 此处可以 替换成rawlist试试看
//     message:"请选择一个版本：",
//     name:"plugin",
//     default:"vue2.x",
//   },
//   {
//     type: 'input',
//     message: '你的名字是',
//     name: 'name',
//     default: '张三'
//   }
// ]
program
  .version('0.0.1')
  .option('-v, --version', 'This is the version');

program
  .command('create <name>')
  .description('初始化模板')
  .option('-t, --template', 'This is the selection template', 'default')
  .action((name, cmd) => {
    // 这是拿到了模板名字， 等下拿这个名字在用户目录下面通过 fs 模块写入文件名
    console.log('name is', name);
    console.log('cmd is', cmd);
  });
program.parse();