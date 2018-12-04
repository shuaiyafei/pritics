### 输出

**只能指定一个输出配置**

```
const config = {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
}

module.exports =  config
```

#### 多个入口起点

```
{
    entry: {
        app: './src/app.js',
        index: './src/index.js'
    },
    output: {
        filename: '[name].js',
        path: __dirname + '/dist'
    }
}
```
