const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: 'client/index.html'
});
module.exports = {
  entry: './client/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, use: 'babel-loader', exclude: path.resolve(__dirname, 'node_modules/') }
    ]
  },
  plugins: [
    HtmlWebpackPluginConfig
  ]
};
