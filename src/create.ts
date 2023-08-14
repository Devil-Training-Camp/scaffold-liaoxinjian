import download from 'download-git-repo';
import { TEMPLATE_GROUP, AnswerOptions } from './enum.js';
import { promisefy } from './utils.js';
import ora from 'ora';

const downloadPromise = promisefy(download);

export default (data: string, path: string, answer: AnswerOptions) => {
  let template = '';
  if (data.indexOf('/') > -1) {
    template = data;
  } else {
    template = TEMPLATE_GROUP[data as keyof typeof TEMPLATE_GROUP];
  }
  getTemplate(template, path, answer);
};

/**
 * 下载不同的模板
 * @param {string} template 模板路径
 */
const getTemplate = async (template: string, path: string, answer: AnswerOptions) => {
  const spinner = ora('Loading').start();
  const mergePath = answer.mergePath || 'main';
  downloadPromise(`${template}#${mergePath}`, `${path}`)
    .then(res => {
      console.log('res', res);
      spinner.succeed('done!');
    })
    .catch(err => {
      console.log('err is', err);
      spinner.fail('fail');
    });
};
