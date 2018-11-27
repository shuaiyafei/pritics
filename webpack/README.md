### webpack

#### 加载css

```
css-loader
file-loader
```

#### 加载css处理器 (sass less stylus)

```
sass-loader
less-loader
stylus-loader
```

#### 加载背景和图片

```
file-loader
url-loader
image-webpack-loader
```

#### 加载字体

```
file-loader
url-loader
```

#### 加载数据(CSV、TSV、XML)

```
csv-loader
xml-loader
```

#### 生态生成bundle

```
module.exports = {
    entry: {
        index: './src/index.js',
        app: './src/app.js'
    },
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist');
    }
}
```