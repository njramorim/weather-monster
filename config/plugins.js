const { HashedModuleIdsPlugin } = require('webpack');
const HtmlWebPackPlugin = require('html-webpack-plugin');
const { SRC_FOLDER } = require('./settings');

const plugins = [
  new HtmlWebPackPlugin({
    template: `./${SRC_FOLDER}/index.html`,
    filename: './index.html'
  }),
  new HashedModuleIdsPlugin()
];

module.exports = plugins;
