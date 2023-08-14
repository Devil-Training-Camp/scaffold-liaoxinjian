import download from 'download-git-repo';
import { TEMPLATE_GROUP, AnswerOptions } from './enum.js';
import { promisefy } from './utils.js';
import ora from 'ora';

const downloadPromise = promisefy(download);

export default (templateValue: string, path: string, answer: AnswerOptions) => {
  let template = '';
  if (Object.keys(TEMPLATE_GROUP).includes(templateValue)) {
    template = templateValue;
  } else {
    template = TEMPLATE_GROUP[templateValue as keyof typeof TEMPLATE_GROUP];
  }
  return getTemplate(template, path, answer);
};

/**
 * 下载不同的模板
 * @param {string} template 模板路径
 */
const getTemplate = async (template: string, path: string, answer: AnswerOptions) => {
  const spinner = ora('Loading').start();
  const mergePath = answer.mergePath || 'main';
  try {
    const res = await downloadPromise(`${template}#${mergePath}`, `${path}`);
    console.log('res', res);
    if (res) {
      spinner.succeed('done!');
    } else {
      spinner.fail('fail');
    }
  } catch (e) {
    console.log('e', e);
    spinner.fail('fail');
  }
};
