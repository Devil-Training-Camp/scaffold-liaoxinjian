const download = require('download-git-repo');

export default (data:string) => {
  if (data.indexOf('/') > -1) {
    // 这是对传入地址的处理
    let reg = /http:\/\/|https:\/\//;
    let templateUrl = '';
    if (reg.test(data)) {
      templateUrl = data;
    } else {
      templateUrl = data[0] === '/'? `https://github.com${data}`: `https://github.com/${data}`
    }
    getTemplate(templateUrl);
  } else {
    if (!TEMPLATE_GROUP[data as keyof typeof TEMPLATE_GROUP]) throw new Error(ERROR.TEMPLAT_EERROR);
    getTemplate(TEMPLATE_GROUP[data as keyof typeof TEMPLATE_GROUP]);
  }
}

/**
 * 下载不同的模板
 * @param {string} template 模板路径
 */
const getTemplate = (template: string) => {
  console.log('template is', template)
  download(`direct:${template}`, 'test/tmp', (err: DowloadError) => {
    console.log(err? 'error': 'sucess');
    console.log('err is', err);
    if (err) console.log(`你所下载的模板${err.statusCode}了，请重新检查下哈`);
  })
}