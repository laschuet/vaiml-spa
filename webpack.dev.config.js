const path = require('path');
const webpack = require('webpack');

const structureConfig = require('./structure.config.js');

const { paths } = structureConfig;
const { filenames } = structureConfig;

const config = {
  mode: 'development',
  context: paths.source,
  entry: {
    app: [
      'webpack-hot-middleware/client',
      path.join(paths.source, filenames.indexJsx),
    ],
  },
  output: {
    filename: filenames.dev.js,
    path: paths.dev,
    publicPath: '/dev/',
  },
  resolve: {
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
    extensions: ['.css', '.js', '.jsx', '.scss'],
    modules: [paths.source, paths.nodeModules],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader'],
      },
      {
        test: /\.jsx?$/,
        use: ['babel-loader'],
        include: paths.source,
      },
      {
        test: /\.(eot|jpe?g|png|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
            },
          },
        ],
      },
    ],
  },
  devtool: 'inline-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
};

module.exports = config;
