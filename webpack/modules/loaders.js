const ExtractTextPlugin = require('extract-text-webpack-plugin');

const fontLoader = { test: /\.woff$/, loader: 'url-loader?limit=50000' };
const jsLoader = {
  test: /\.jsx$|\.js$/,
  exclude: /(bower_components|node_modules)/,
  loaders: ['babel-loader', 'imports-loader?define=>false']
};

const svgFileName = {
  development: '[name].[ext]',
  production: '[name]-[hash].[ext]'
};

const svgLoader = function svgLoader(name) {
  return {
    test: /\.svg$/,
    exclude: /(bower_components|node_modules)/,
    use: [
      {
        loader: 'file-loader',
        options: {
          name: name,
          publicPath: '/bundles/'
        }
      }
    ]
  };
};

module.exports = {
  development: [
    {
      test: /\.(scss|css)$/,
      loaders: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader']
    },
    jsLoader,
    fontLoader,
    svgLoader(svgFileName.development)
  ],
  production: [
    {
      test: /\.(scss|css)$/,
      loader: ExtractTextPlugin.extract([
        'css-loader?minimize&-autoprefixer',
        'postcss-loader',
        'sass-loader'
      ])
    },
    jsLoader,
    fontLoader,
    svgLoader(svgFileName.production)
  ]
};
