const path = require('path');

module.exports = {
  context: __dirname,
  entry: {
    app: '../resources/assets/js/app.js'
  },
  output: {
    path: path.resolve(__dirname, '..', 'public', 'js'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.jsx$|\.js$/,
        exclude: /(bower_components|node_modules)/,
        loaders: ['babel-loader', 'imports-loader?define=>false']
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, '..', 'resources', 'assets'),
      'node_modules'
    ]
  },
  resolveLoader: {
    modules: [path.join(__dirname, '..', 'node_modules')]
  }
};
