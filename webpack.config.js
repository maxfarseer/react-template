var path = require('path');
var webpack = require('webpack');
//var autoprefixer = require('autoprefixer');
var WebpackNotifierPlugin = require('webpack-notifier');

module.exports = {
  devtool: 'eval-source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:3000',
    'webpack/hot/only-dev-server',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new WebpackNotifierPlugin,
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include:
          path.join(__dirname, 'src')
      },
      {
        test: /\.js$/,
        include: path.join(__dirname, 'src'),
        use: [
          'react-hot-loader',
          'babel-loader',
        ],
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          { loader: 'css-loader' },
        ],
        //loader: 'style-loader!css-loader'
      },
      {
        test: /\.scss$/,
        use: [
          'style-loader',
          'css-loader',
          'sass-loader',
        ],
        include: path.join(__dirname, 'src'),
        //loader: 'style-loader!css-loader!postcss-loader!sass-loader'
      },
      {
        test: /\.(woff)(\?[a-z0-9]+)?$/,
        include: path.join(__dirname, 'src'),
        use: [
          'file-loader'
        ],
      },
      {
        test: /\.png$/,
        include: path.join(__dirname, 'src'),
        use: [
          'url-loader',
        ],
      },
      {
        test: /\.json$/,
        exclude: path.join(__dirname, 'node_modules'),
        use: [
          'json-loader',
        ],
      }
    ]
  }
  //postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ]
};
