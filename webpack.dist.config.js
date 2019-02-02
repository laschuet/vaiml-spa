const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const webpack = require('webpack');

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
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
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
      new UglifyJsPlugin({
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
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': '"production"',
    }),
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
