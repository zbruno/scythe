const path = require('path');

module.exports = {
  production: {
    path: path.resolve(__dirname, '..', '..', 'public', 'bundles'),
    filename: `[name]-${new Date().getTime()}.js`
  },
  development: {
    path: path.resolve(__dirname, '..', '..', 'public', 'bundles'),
    publicPath: '/bundles/',
    filename: '[name].js'
  }
};
