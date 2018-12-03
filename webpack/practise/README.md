**递归构建一个依赖关系图**

- entry

    ```
    // 使用哪个模块作为依赖的开始 打包所有的依赖生成bundle的过程
    module.exports = {
        entry: './src/index.js'
    }
    ```

- output

    ```
    // 输出以及如何命名bundle
    module.exports = {
        output: {
            filename: 'bundle.js',
            path: path.resolve(__dirname, 'dist')
        }
    }
    ```

- loader

    ```
    // 将所有类型的文件转化成webpack可以处理的模块
    module.exports = {
        module: {
            rules: [
                {
                    test: /\.css$/,
                    use: ['style-loader', 'css-loader']
                }
            ]
        }
    }
    ```

- plugins


