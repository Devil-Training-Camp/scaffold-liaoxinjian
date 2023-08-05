// const download = require('download-git-repo');
import download from 'download-git-repo';
import { TEMPLATE_GROUP, AnswerOptions } from './enum.js';
// typo 了
import { promisefy } from './utils.js';
import ora from 'ora';

const downloadPromise = promisefy(download);

export default (data: string, path: string, answer: AnswerOptions) => {
  let template = '';
  // 这个判断不靠谱吧，应该是：
  // Object.keys(TEMPLATE_GROUP).includes(data)
  // 这样会好一点？
  // 其次，data 这个名称也是过度泛化了，缺乏语义
  if (data.indexOf('/') > -1) {
    template = data;
  } else {
    template = TEMPLATE_GROUP[data as keyof typeof TEMPLATE_GROUP];
  }
  // 下面这段应该 return，返回这个 promise，或者 await 一下
  getTemplate(template, path, answer);
};

/**
 * 下载不同的模板
 * @param {string} template 模板路径
 */
const getTemplate = async (
  template: string,
  path: string,
  answer: AnswerOptions,
) => {
  const spinner = ora('Loading').start();
  const mergePath = answer.mergePath || 'main';
  // 用 async-await 吧
  downloadPromise(`${template}#${mergePath}`, `${path}`)
    .then((res) => {
      spinner.succeed('done!');
    })
    .catch((err) => {
      spinner.fail('fail');
    });
};
