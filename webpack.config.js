'use strict';

const NODE_ENV = process.env.NODE_ENV || 'development';
const webpack = require("webpack");

module.exports = {
  entry: {
    main: "./frontend/main",
    about: "./frontend/about"
  },
  output: {
    path: __dirname + '/public',
    filename: "[name].js",
    library: "[name]" // Экспорт глобальных переменных по названию файла
  },
  watch: NODE_ENV == 'development',
  devtool: NODE_ENV == 'development' ? "source-map" : null,
  
  plugins: [
      new webpack.DefinePlugin({
        NODE_ENV: JSON.stringify(NODE_ENV)
      })
    ],
  
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      query: {
        presets: ['es2015'],
        plugins: ['transform-runtime']
      }
    }]
  }
};

if (NODE_ENV == 'production') {
  module.exports.plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        drop_console: true,
        unsafe: true
      }
    })
  )
}