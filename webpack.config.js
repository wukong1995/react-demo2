/* global __dirname */

const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
const OptimizeCSS  = require('optimize-css-assets-webpack-plugin');
const TerserPlugin  = require('terser-webpack-plugin');

module.exports = {
  entry: './src/entry.ts',
  output: {
    path: __dirname + '/build',
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)?$/,
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
          '^/api': ''
        }
      }
    },
    port: 8888,
    historyApiFallback: true,
  },
  optimization: {
    minimize: process.env.NODE_ENV === 'production',

    minimizer: [
      new OptimizeCSS(),
      new TerserPlugin({
        test: /\.js(\?.*)?$/i
      })
    ],
  },
  plugins: [
    new ExtractTextPlugin('main.css'),
    new webpack.DefinePlugin({ 'process.env.NODE_ENV': JSON.stringify('production') })
  ],
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css', '.scss'],
  },
  devtool: 'eval-source-map'
};
