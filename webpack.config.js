//let webpack know where the entry point is
//let know where output goes
const path = require('path');
//node thing
//properties defined on webpack.js.org
module.exports = {
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }, {
      test: /\.s?css$/,
      use: [
        'style-loader',
        'css-loader',
        'sass-loader'
      ]
    }]
  },
  devtool: 'cheap-module-eval-source-map',
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true
  }
};

//loader - customize behavior of webpack when loading a file like run through babel or convert scss to class
//module.rules let you define how to use loaders
//devtool for source mapping see .org/configuration/devtool
//source maps for console/err debugging finding
