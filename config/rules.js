const { IGNORE_PATHS, IS_PRODUCTION } = require('./settings');

const rules = [
  {
    test: /\.html$/,
    use: {
      loader: 'html-loader',
      options: {
        minimize: IS_PRODUCTION
      }
    }
  },
  {
    test: /\.js$/,
    exclude: IGNORE_PATHS,
    use: ['babel-loader', 'eslint-loader']
  }
];

module.exports = rules;
