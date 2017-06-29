/**
 * 服务器相关配置
 */
exports.server = {
  port: 4000
};


/**
 * 服务
 */
exports.services = {
};


/**
 * 模板帮助方法
 */
exports.helpers = {
};


/**
 * web中间件相关配置
 */
exports.web = {
  // 用于设置app.keys, 实际应用需要重新产生一个
  keys: ['17e6b6bc6129097383dcad4fa1602233'],

  // https://github.com/koajs/favicon
  // favicon: pathUtil.join(__dirname, '../public/favicon.ico'),

  // https://github.com/koajs/response-time
  rtime: {}
};


/**
 * 前端资源相关配置
 */
exports.assets = {
  simpleMode: true
};
