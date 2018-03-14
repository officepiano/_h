const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
module.exports = {
    entry: {
     app: './src/index.js',
     // print: './src/print.js'
   },
   devServer: {
        contentBase:  'dist',
        compress: false,
        port: 8182,
        inline: false
   },
   // devtool: 'inline-source-map',
   plugins: [
   	 new CleanWebpackPlugin(['dist']),
     new HtmlWebpackPlugin({
        filename:  'index.html',
		template: 'index.html',
		chunks: ['app']
     })
   ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, '../dist')
  }
};