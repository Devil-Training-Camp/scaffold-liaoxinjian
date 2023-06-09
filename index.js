#! /usr/bin/env node
// const { Command } = require('commander');
// const program = new Command();

// // 在每个 option 的第一项都是一个命令选项，它定义了短选项，也定义了长选项
// // -d  -s -p 这种称为短选项，短选项的前面都是用 - 来表示，后面跟一个字母
// // --debug --small --pizz-type 这三个被称为长命令，长命令
// program
//   .version('0.0.1')
//   .option('-v, --version', 'This is version')
//   .option('-s, --small', '这是描述2')
//   .option('-p, --pizz-type <type>', '这是描述三')
//   .option('-d, --default <type>', 'This is default value', '123');

// // process.argv 是返回启动这条 nodejs 命令的时候所携带的参数
// // 第一项是这个命令所在的绝对路径
// // 第二项是当前执行的 js 文件路径
// // 剩余的就是启动这条命令拼接在后面的参数
// program.parse(process.argv);

// const options = program.opts();
// console.log('options', options.default);



// const { Command } = require('commander');
// const program = new Command();

// program
//   .version('0.0.1', '-v, --version')
//   .option('--no-test', 'This is --no-test')
//   .option('-d, --default <type>', 'This is default value', '123')
//   .option('--no-two', 'This is --no-two')
//   .requiredOption('-c, --cheese <type>', 'This is --cheese')
//   .parse();

// const options = program.opts();

// let valueOne = options.test? 'test': 'no test';
// let valueTwo = options.two? 'two': 'no two';

// console.log(`This is ${valueOne} and ${valueTwo} and ${options.default}`);

// const { Command } = require('commander');
// const program = new Command();

// program
//   .command('clone')
//   .argument('<first>', 'integer argument')
//   .argument('[second]', 'integer argument', 'myParseInt2')
//   .action((first, second) => {
//     console.log('source =====>', first);
//     console.log('description =====>', second);
//   })