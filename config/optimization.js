const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

const cleanDist = new CleanWebpackPlugin();

const minJs = new UglifyJsPlugin({
  cache: true,
  parallel: true,
  sourceMap: false,
  extractComments: true
});

const minimizer = [cleanDist, minJs];

const splitChunks = {
  chunks: 'all',
  maxInitialRequests: 10,
  minSize: 50,
  cacheGroups: {
    vendor: {
      test: /[\\/]node_modules[\\/]/,
      name(module) {
        const packageName = module.context.match(
          /[\\/]node_modules[\\/](.*?)([\\/]|$)/
        )[1];

        return `npm.${packageName.replace('@', '')}`;
      }
    }
  }
};

module.exports = {
  minimizer,
  runtimeChunk: 'single',
  splitChunks
};
