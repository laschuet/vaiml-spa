const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const TerserPlugin = require('terser-webpack-plugin');

const structureConfig = require('./structure.config.js');

const { paths } = structureConfig;
const { filenames } = structureConfig;

const config = {
  mode: 'production',
  entry: {
    app: path.join(paths.source, filenames.indexJsx),
  },
  output: {
    filename: filenames.dist.js,
    path: paths.dist,
  },
  resolve: {
    extensions: ['.css', '.js', '.jsx', '.scss'],
    modules: [paths.source, paths.nodeModules],
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader',
          'sass-loader',
        ],
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
  optimization: {
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
      new OptimizeCssAssetsPlugin({}),
    ],
    splitChunks: {
      chunks: 'all',
      name: 'vendors',
    },
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: filenames.dist.css,
    }),
    new HtmlWebpackPlugin({
      filename: filenames.indexHtml,
      template: path.join(paths.source, filenames.indexEjs),
      inject: false,
    }),
  ],
};

module.exports = config;
