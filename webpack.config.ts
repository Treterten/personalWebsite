import webpack = require('webpack');
import ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
import path = require('path');

const config: webpack.Configuration = {
  entry: './client/site/index.tsx',
  plugins: [
    new ForkTsCheckerWebpackPlugin({
      async: false,
      eslint: {
        files: './client/site/*',
      },
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.css$/,
        include: path.resolve(__dirname, './client/site'),
        use: [
          'style-loader',
          '@teamsupercell/typings-for-css-modules-loader',
          {
            loader: 'css-loader',
            options: {
              modules: true,
            },
          },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js', '.jsx'],
  },
  output: {
    path: path.resolve(__dirname, './client/public/'),
    filename: 'bundle.js',
  },
};

export default config;
