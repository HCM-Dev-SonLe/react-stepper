const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  entry: __dirname + "/src/app/index.js",
  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
        {
          test: /\.js$/,
          use: 'babel-loader',
          exclude: [
            /node_modules/
          ]
        },
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
    ]
  },
  plugins: [
      new HtmlWebpackPlugin({
          template: __dirname + "/src/public/index.html",
          inject: 'body'
      }),

  ],
  devServer: {
      contentBase: './src/public',
      port: 3000,
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src/app'), path.resolve(__dirname, 'node_modules')],
    extensions: ['.js']
  },
  devtool: 'eval-source-map'
};
