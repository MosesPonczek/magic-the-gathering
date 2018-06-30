const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'development',

  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
         test: /\.txt$/, 
         use: 'raw-loader' 
      },
      {
      test: /\.s?css$/,
      use: [
        { loader: MiniCssExtractPlugin.loader },
        { loader: 'css-loader', options: { minimize: true } },
        { loader: 'sass-loader' },
        { loader: 'postcss-loader' }
      ]
    },
    {
      test: /\.(png|jpg|jpeg|gif|svg)$/, 
      loader: 'file-loader',
      options: {
        name: '[name].[ext]',
        outputPath: 'src/'
      }
    },
  ]
  },
  plugins: [
    new UglifyJsPlugin(),
    new HtmlWebpackPlugin({ 
      template: './src/index.html'
     }),
     new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
};