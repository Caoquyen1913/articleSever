// const path = require('path');
// const webpack = require('webpack');
// module.exports = {
//   entry: './src/index.js',
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'dist'),
//     clean: true,
//     // libraryTarget: 'commonjs2',
//   },
//   module: {
//     rules: [
//       {
//         test: /\.(js|jsx)$/,
//         use: 'babel-loader',
//       },
//     ],
//   },
//   plugins: [new webpack.ProgressPlugin()],
//   // devServer: {
//   //   open: true,
//   //   contentBase: './dist',
//   // },
//   // resolve: {
//   //   extensions: ['.js', '.json'],
//   // },
//   mode: 'development',
//   // watch: true, //watch mode
//   //devtool: 'inline-source-map', // go to bug from source file or use mode: "devlopment"
// };

const path = require('path');
// const TerserPlugin = require('terser-webpack-plugin');
// const { getIfUtils, removeEmpty } = require('webpack-config-utils');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    libraryTarget: 'commonjs2',
  },
  // module: {
  //   rules: [
  //     {
  //       test: /\.js?$/,
  //       exclude: /node_modules/,
  //       loader: 'babel-loader',
  //       options: {
  //         presets: [
  //           [
  //             '@babel/preset-env',
  //             {
  //               targets: {
  //                 node: '8.10',
  //               },
  //             },
  //           ],
  //         ],
  //       },
  //     },
  //   ],
  // },
  module: {
    rules: [
      {
        test: /\.html$/i,
        loader: "html-loader",
      },
    ],
  },
  resolveLoader: {
    modules: [`${__dirname}/node_modules`],
  },
  resolve: {
    fallback: {
      fs: false,
      tls: false,
      net: false,
      path: false,
      zlib: false,
      http: false,
      https: false,
      stream: false,
      crypto: false,
      url: false,
      utils: false,
      buffer: false,
      string_decoder: false,
      querystring: false,
    },
  },
  mode: 'development',
  devServer: {
    static: './',
    // contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000,
    historyApiFallback: true,
  },
  target: 'node',

  externals: {
    express: 'express',
  },
  stats: {
    errorDetails: true,
  },
};
