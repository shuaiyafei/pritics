const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const path = require('path');

module.exports = {
    entry: __dirname + '/../public/js/index.js',
    output: {
        path: __dirname + '/../public',
        filename: 'bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {
                            modules: true,
                            localIdentName: '[name]__[local]--[hash:base64:5]'
                        }
                    }],
                })
            }
        ]
    }
};