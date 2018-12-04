### loader

**loader用于对模块的源代码进行转换**

安装loader

```
npm install css-loader --save-dev

npm install ts-loader --save-dev
```

解析对应文件

```
module.exports = {
    module: {
        rules: [
            {
                test: /\.css$/,
                use: 'css-loader'
            },
            {
                test: /\.ts$/,
                use: 'ts-loader'
            }
        ]
    }
}
```