const { NODE_ENV } = process.env;

module.exports = {
  SERVER_PORT: 3000,
  SRC_FOLDER: 'src',
  DIST_FOLDER: 'dist',
  IGNORE_PATHS: /(node_modules|dist)/,
  IS_PRODUCTION: NODE_ENV === 'production',
  IS_MOCK: NODE_ENV === 'mock'
};
