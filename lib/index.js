#! /usr/bin/env node
"use strict";
const { Command } = require('commander');
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const { setTemplate } = require('./bin/create');
const { QUESTIONGROUP } = require('./bin/enum');
const program = new Command();
// 读取 package.json 配置
const PACKAGE = JSON.parse(fs.readFileSync(path.resolve(process.cwd(), 'package.json')));
const VERSION = PACKAGE.version;
program
    .version(VERSION)
    .option('-v, --version', 'This is the version');
program
    .command('create <name>')
    .description('初始化模板')
    // 这里给选项一个必填值，如果给个可选值的话  到时候用户只输入 -t 没有带后面的参数，还得对这个结果进行处理
    // 用户不输入参数后，返回过来的参数结果为 { template: true }
    .option('-t, --template <value>', 'This is the selection template', 'default')
    .action(async (name, cmd) => {
    // 这是拿到了模板名字， 等下拿这个名字在用户目录下面通过 fs 模块写入文件名
    // console.log('name is', name);
    // console.log('cmd is', cmd);
    const answer = await inquirer.prompt(QUESTIONGROUP);
    // console.log(answer);
    setTemplate(cmd.template);
});
program.parse();
