const join = require('path').join;
const webpack = require('webpack');
const validate = require('webpack-validator');

module.exports = validate({

  devtool: 'source-map',

  entry: join(__dirname, 'src', 'gaia.js'),

  output: {
    library: 'gaia',
    libraryTarget: 'umd',
    path: join(__dirname, 'dist'),
  },

  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /(node_module|dist)/,
      loader: 'babel',
    }],
  },
});
