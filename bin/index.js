#! /usr/bin/env node

const { Command } = require('commander');
const { TEMPLATEGROUP, ERROR } = require('./enum');
const program = new Command();

let args = {};

const setTemplate = (data) => {
  if (data.indexOf('/') > -1) {
    // 这是对传入地址的处理
  } else {
    console.log('进来了')
    if (!TEMPLATEGROUP[data]) throw new Error(ERROR.TEMPLATEERROR)
  }
}

program
  .version('0.0.1')
  .option('-v, --version', 'This is the version');

program
  .command('create <name>')
  .description('初始化模板')
  // 这里给选项一个必填值，如果给个可选值的话  到时候用户只输入 -t 没有带后面的参数，还得对这个结果进行处理
  // 用户不输入参数后，返回过来的参数结果为 { template: true }
  .option('-t, --template <value>', 'This is the selection template', 'default')
  .action((name, cmd) => {
    // 这是拿到了模板名字， 等下拿这个名字在用户目录下面通过 fs 模块写入文件名
    console.log('name is', name);
    console.log('cmd is', cmd);
    setTemplate(cmd.template);
    args = cmd;
  });
program.parse();


