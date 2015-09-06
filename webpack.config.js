var fs = require('fs');
var path = require('path');
var webpack = require('webpack');

var contentBase = path.join(__dirname, 'client');

module.exports = {
  devtool: '#eval',

  entry: [
    'webpack-hot-middleware/client',
    './client/index'
  ],
  output: {
    path: path.join(contentBase, 'build'),
    filename: '[name].js',
    chunkFilename: '[id].chunk.js',
    publicPath: '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [{
      test: /\.js?$/,
      loaders: ['babel'],
      include: contentBase
    },
    {
      test: /\.css?$/,
      loader: 'style!css'
    }]
  }
};
