const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
import { resolve } from 'path';
const rootResolve = pathname => resolve(__dirname, pathname);

module.exports = {
  entry: './src/js/main.js',
  output: {
    path: path.resolve(__dirname, 'public'),
    publicPath: '',
    filename: 'assets/js/[name].js'
  },
  externals: {
    //
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js',
    },
    extensions: ['.js', '.scss', '.sass', '.vue'],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
      }
    }),
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: `${rootResolve('src/html/index.pug')}`,
    }),
    new ExtractTextPlugin({
      filename: 'assets/css/style.[hash].css',
      disable: process.env.NODE_ENV !== 'production',
      allChunks: true
    })
  ],
  module: {
    noParse: /es6-promise\.js$/,
    rules: [
      {
        test: /\.pug$/,
        exclude: /node_modules/,
        use: 'pug-loader'
      },
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules|vue\/dist|vue-router\/|vue-loader\/|vue-hot-reload-api\//,
        use: 'babel-loader'
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'eslint-loader',
      },
      {
        test: /\.(css|scss|sass)$/,
        use: ExtractTextPlugin.extract({
          fallback: "style-loader",
          use: [
            { loader: 'css-loader', options: { importLoaders: 2 } },
            'postcss-loader',
            'sass-loader',
          ]
        })
      }
    ]
  },
  devServer: {
    contentBase: rootResolve('docs'),
    publicPath: '/',
    hot: true,
    host: '0.0.0.0'
  }
};
