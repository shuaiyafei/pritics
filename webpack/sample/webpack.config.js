const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    //source-map 在一个单独的文件中产生一个完整且功能完全的文件
    //cheap-module-source-map 在一个单独的文件中生成一个不带列映射的map
    //eval-source-map 使用eval打包源文件模块，在同一个文件中生成干净的完整的source map
    //cheap-module-eval-source-map 这是在打包文件时最快的生成source map的方法，生成的Source Map 会和打包后的JavaScript文件同行显示，没有列映射
    devtool: 'eval-source-map',
    devServer: {
        contentBase: './public',
        historyApiFallback: true,
        inline: true,
    },
    entry: __dirname + '/app/main.js',
    module: {
        rules: [{
            test: /\.css$/,
            use: [{
                loader: "style-loader"
            }, {
                loader: "css-loader",
                options: {
                    modules: true, // 指定启用css modules
                    localIdentName: '[name]__[local]--[hash:base64:5]' // 指定css的类名格式
                }
            },
            // {
            //     loader: 'postcss-loader'
            // }
        ]
        }]
    },
    output: {
        path: __dirname + '/public',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.BannerPlugin('sample'),
        new HtmlWebpackPlugin({
            template: __dirname + '/app/index.temp.html'
        }),
    ]
};