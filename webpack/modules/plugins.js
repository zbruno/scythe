const webpack = require('webpack');
const WebpackAssetsManifest = require('webpack-assets-manifest');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const Dotenv = require('dotenv-webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');

const {
  FACEBOOK_CLIENT_ID,
  GOOGLE_CLIENT_ID,
  STRIPE_PUBLIC,
  BUGSNAG_JS_API_KEY,
  APP_ENV
} = process.env;

function stringify(arg) {
  return JSON.stringify(arg);
}

module.exports = {
  production: [
    new ExtractTextPlugin(
      '[name]-[chunkhash]-' + new Date().getTime() + '.css'
    ),
    new WebpackAssetsManifest({
      output: '../webpack-assets.json' // relative to output.path
    }),
    new UglifyJsPlugin({
      uglifyOptions: {
        compress: false
      }
    }),
    // in prod we dont have a .env file, so we use the environment variables set in heroku
    new webpack.DefinePlugin({
      'process.env': {
        APP_ENV: stringify(APP_ENV),
        FACEBOOK_CLIENT_ID: stringify(FACEBOOK_CLIENT_ID),
        GOOGLE_CLIENT_ID: stringify(GOOGLE_CLIENT_ID),
        STRIPE_PUBLIC: stringify(STRIPE_PUBLIC),
        BUGSNAG_JS_API_KEY: stringify(BUGSNAG_JS_API_KEY)
      }
    })
  ],
  // in dev we just use the environmental variables in our .env file
  dev: [
    new Dotenv({
      path: './.env'
    })
  ]
};
