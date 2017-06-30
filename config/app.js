const pathUtil = require('path');


/**
 * 服务器相关配置
 */
exports.server = {
  port: 4000
};


/**
 * 模块目录
 */
exports.modulesDir = pathUtil.join(__dirname, '../app');


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

  // https://github.com/koajs/response-time
  rtime: {},

  favicon: pathUtil.join(__dirname, '../public/favicon.ico'),

  static: {
    root: pathUtil.join(__dirname, '../public')
  }
};


/**
 * 前端资源相关配置
 */
exports.assets = {
  // 只使用简单模式，前端资源主要由webpack处理
  simple: true,
  // 对资源进行hash重命名，适合发布到CDN等场景
  digest: true,
  // 资源前缀
  prefix: '/g',
  // 如果婺源发到CDN，则需要设置资源的URL前缀
  //urlPrefix: 'https://cdn.static.com/hello-react/'
};


exports.react = {
  path: pathUtil.join(__dirname, '../public/g/server.js')
};
