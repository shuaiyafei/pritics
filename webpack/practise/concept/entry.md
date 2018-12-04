### 入口



```
const config = {
    entry: './src/index.js'
}

// 创建多个主入口
const mu = {
    entry: {
        index: './src/index.js',
        app: './src/app.js'
    }
}

module.exports = config
```

`CommonsChunkPlugin`



