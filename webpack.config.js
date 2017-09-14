/* global __dirname */

const ExtractTextPlugin = require('extract-text-webpack-plugin');  //css单独打包
const webpack =  require('webpack');

module.exports = {
  entry: './src/entry.js', //唯一入口文件
  output: {
    path: __dirname + '/build', //打包后的文件存放的地方
    filename: 'bundle.js' //打包后输出文件的文件名
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        include: /src/
      },
      {
        test: /\.(css|scss|sass)$/i,
        use: ExtractTextPlugin.extract({
          use: ['css-loader', 'sass-loader'],
          fallback: 'style-loader'
        })
      },
      {
        test: /\.(png|jpg)$/,
        loader: 'url?limit=8192'
      },
      {
        test: /\.(ttf|eot|svg|woff|woff2)(\?.+)?$/,
        loader: 'file-loader?name=[hash:12].[ext]'
      },
      {
        test: require.resolve('jquery'),
        use: [{
          loader: 'expose-loader',
          options: 'jQuery'
        }, {
          loader: 'expose-loader',
          options: '$'
        }]
      }
    ]
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8088',
        secure: false,
        pathRewrite: {
          '^/api' : ''
        }
      }
    },
    port: 8888,
    historyApiFallback: true,  //不跳转
    inline: true , //实时刷新,
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') }),
    new webpack.optimize.UglifyJsPlugin({
      output: {
        comments: false
      }
    })
  ],
  resolve: {
    extensions: ['.js', '.jsx', '.css', '.scss']
  }
};
