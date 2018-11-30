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

#### 设定HtmlWebpackPlugin

```
npm install html-webpack-plugin --save-dev
```
自动将生成的bundle加载到页面中


#### 清理dist

```
npm install clean-webpack-plugin --save-dev
```
每次build 清楚dist里面的内容


#### inline-source-map

配置

```
devtool: inline-source-map
```
用于查看源文件报错位置

#### npm run watch

```
// 在script脚本中配置命令 watch: webpack --watch
npm run watch
```

监听依赖文件的内容 实时打包

#### devServer

实时根据bundle的打包重新加载页面

```
devServer: {
    contentBase: './dist'
}

// 启动命令
webpack-dev-server --open
```

#### webpack-dev-middleware   express

可以将webpack处理之后的文件传给服务器

```
const express = require('exress');
const webpack = require('webpick');
const webpackDevMiddleware = require('webpack-dev-middleware');
const config = require('./webpack.config.js');
const app = express();

const compiler = webpack(config);

app.use(webpackDevMiddle(compiler, {
    publicPath: config.output.publicPath
}))
```

#### HMR 模块热替换

**HMR不适用于生产环境 只适用于开发环境**

```
devServer: {
    contentBase: './dist',
    hot: true
},
plugin: [
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
]




if (module.hot) {
    module.hot.accept('./print.js')
}
```

