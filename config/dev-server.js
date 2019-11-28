const { SERVER_PORT, IS_MOCK } = require('./settings');
const apiMocker = require('connect-api-mocker');

const devServer = {
  inline: true,
  hot: true,
  port: 8080,
  compress: true,
  historyApiFallback: true,
  before: app => IS_MOCK && app.use(apiMocker('/api', { target: 'mocks/api' })),
  proxy: {
    '/api': `http://localhost:${SERVER_PORT}`
  },
  clientLogLevel: 'silent',
  stats: {
    assets: false,
    children: false,
    chunks: false,
    hash: false,
    modules: false,
    publicPath: false,
    timings: false,
    version: false,
    warnings: true,
    colors: {
      green: '\u001b[32m'
    }
  }
};

module.exports = devServer;
