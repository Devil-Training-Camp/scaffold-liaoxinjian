const { TEMPLATEGROUP, ERROR } = require('./enum');

exports.setTemplate = (data) => {
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
    if (!TEMPLATEGROUP[data]) throw new Error(ERROR.TEMPLATEERROR);
    getTemplate(TEMPLATEGROUP[data]);
  }
}

/**
 * 下载不同的模板
 * @param {*} template 模板路径
 */
const getTemplate = (template) => {
  console.log('template is', template)
}