#! /usr/bin/env node
// 这个文件能直接运行吗？不需要编译成 js 吗
// 另外，实践上，ts 文件应该都放在 src 会比较好管理一些
import { Command } from 'commander';
import inquirer from 'inquirer';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import setTemplate from './src/create.js';
import { CmdOptions, QUESTION_GROUP } from './src/enum.js';
const program = new Command();

// 为了兼容在 esm 中没有内置的 __dirname, 这里模拟了一个 __dirname
const __filenameNew = fileURLToPath(import.meta.url);
const __dirnameNew = path.dirname(__filenameNew);
// 读取 package.json 配置
const packagePath = path.resolve(__dirnameNew, '../package.json');
const PACKAGE = JSON.parse(fs.readFileSync(packagePath).toString());
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
  .action(async (name:string, cmd: CmdOptions) => {
    // console.log('name is', name);
    const answer = await inquirer.prompt(QUESTION_GROUP);
    // console.log(answer);
    const baseRouter = path.resolve(process.cwd(), name);
    setTemplate(cmd.template, baseRouter, answer);
  });
program.parse();