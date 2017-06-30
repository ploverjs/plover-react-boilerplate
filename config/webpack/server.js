const pathUtil = require('path');
const merge = require('webpack-merge');
const base = require('./base');


const srcPath = pathUtil.join(__dirname, '../../static');


exports = module.exports = merge(base, {
  target: 'node',

  externals: {
    react: 'React'
  },

  output: {
    library: 'ploverReactComponents',
    libraryTarget: 'global'
  }
});


exports.entry = {
  server: pathUtil.join(srcPath, 'pages/server')
};
