const path = require('path');
const { SRC_FOLDER, DIST_FOLDER } = require('./config/settings');
const devServer = require('./config/dev-server');
const rules = require('./config/rules');
const optimization = require('./config/optimization');
const plugins = require('./config/plugins');
const { IS_PRODUCTION } = require('./config/settings');

module.exports = () => {
  return {
    entry: [
      'react-hot-loader/patch',
      '@babel/polyfill',
      `./${SRC_FOLDER}/index.js`
    ],
    output: {
      filename: '[name].[hash].js',
      path: path.resolve(__dirname, DIST_FOLDER)
    },
    devtool: !IS_PRODUCTION && 'eval-source-maps',
    devServer,
    module: { rules },
    optimization,
    plugins
  };
};
