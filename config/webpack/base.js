const pathUtil = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

const appRoot = pathUtil.join(__dirname, '../..');
const srcPath = pathUtil.join(appRoot, 'static');
const distPath = pathUtil.join(appRoot, 'public/g');


/* eslint no-process-env: 0 */


const svgConfig = JSON.stringify({
  plugins: [
    { removeTitle: true },
    { convertColors: { shorthex: true }},
    { convertPathData: true },
    { removeStyleElement: true },
    { removeUselessDefs: true }
  ]
});


const postcssConfig = {
  plugins: [
    require('precss'),
    require('autoprefixer')()
  ]
};


module.exports = {
  entry: {
    page: pathUtil.join(srcPath, 'pages/page')
  },


  output: {
    path: distPath,
    filename: '[name].js',
    chunkFilename: "[id]-[chunkhash].js",
    publicPath: '/'
  },


  devtool: 'cheap-module-source-map',


  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: postcssConfig
            }
          ]
        })
      },

      {
        test: /\.scss/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            {
              loader: 'postcss-loader',
              options: postcssConfig
            },
            'sass-loader'
          ]
        })
      },

      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: [
          'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack-loader?{bypassOnDebug:true,options:{optimizationLevel:7},gifsicle:{interlaced:false}}'
        ]
      },

      {
        test: /\.(woff|woff2|eot|ttf)$/,
        loader: 'url-loader?limit=8192'
      },

      {
        test: /\.svg$/,
        loaders: ['raw-loader', 'svgo-loader?' + svgConfig]
      },

      {
        test: /\.js$/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              cacheDirectory: true,
              presets: ['react', 'es2015', 'stage-0'],
              plugins: [
              ]
            }
          }
        ]
      }
    ]
  },


  plugins: [
    new CopyWebpackPlugin([{
      from: pathUtil.join(srcPath, 'public/')
    }]),

    new ExtractTextPlugin({
      filename: '[name].css'
    })
  ],


  resolve: {
    alias: {
      components: `${srcPath}/components`,
      images: `${srcPath}/images`,
      util: `${srcPath}/util`,
      vendors: `${srcPath}/vendors`
    }
  }
};


