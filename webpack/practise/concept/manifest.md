### manifest

#### Runtime

在浏览器运行时 webpack用来连接模块化的应用程序的所有代码
runtime: 在模块交互时 连接模块所需的加载和解析逻辑

#### Manifest

当编译器开始执行、解析和映射应用程序时 它会保留所有模块的详细要点
当完成打包并发送到浏览器的时候 会在运行时通过Manifest来解析和加载模块
无论使用哪种模块语法 `import`和`require`都已经转化为`__webpack_require__`方法

