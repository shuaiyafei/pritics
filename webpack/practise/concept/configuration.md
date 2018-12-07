#### 配置

- 通过require导入其他文件
- 通过require导入npm工具函数
- 使用JavaScript控制流表达函数
- 编写并执行函数生成配置

```
const path = require('path');

module.exports = {
    mode: 'development',
    entry: './foo.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    }
}
```