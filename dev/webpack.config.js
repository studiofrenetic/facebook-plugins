var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: './dev/dev.js',

  output: {
    path: './dev',
    filename: 'bundle.js',
    publicPath: '/'
  },

  devServer: {
    filename: 'dev.js',
    contentBase: './dev'
  },

  devtool: 'source-map',

  module: {
    loaders: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        loader: 'babel-loader?stage=0'
      }
    ]
  },

  plugins: [new HtmlWebpackPlugin()]
};
