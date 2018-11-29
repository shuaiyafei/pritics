const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = {
    entry: {
        A: './src/a.js',
        B: './src/b.js'
    },
    devtool: 'inline-source-map',
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'output'
        })
    ],
    output: {
        filename: [name].bundle.js,
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/'
    }
}
