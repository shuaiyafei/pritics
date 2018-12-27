const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const options = {
    devtool: 'eval-source-map',
    entry: {
        app: `${__dirname}/src/pratics`
    },
    output: {
        path: `${__dirname}/dist`,
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${__dirname}/src/index.temp.html`,
        }),
    ]
}

module.exports = options;