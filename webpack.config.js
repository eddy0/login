const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path')

module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
                {test: /\.js$/, use: 'babel-loader'},
    ]},
    plugins: new HtmlWebpackPlugin({
        template: 'src/index.html'
    })
}
