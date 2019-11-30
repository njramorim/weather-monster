const { NODE_ENV } = process.env;

const SERVER_PORT = 3000;
const IS_PRODUCTION = NODE_ENV === 'production';

module.exports = {
  SERVER_PORT,
  SRC_FOLDER: 'src',
  DIST_FOLDER: 'dist',
  IGNORE_PATHS: /(node_modules|dist)/,
  IS_PRODUCTION,
  IS_MOCK: NODE_ENV === 'mock',
  API_HOST: IS_PRODUCTION ? `http://localhost:${SERVER_PORT}/api` : '/api'
};
