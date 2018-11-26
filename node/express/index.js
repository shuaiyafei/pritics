const express = require('express');
const util = require('util');

const app = express();

// 设置静态文件
// 可以在public/images 目录下面放置图片
app.use(express.static('public'));
const path = `<img src="images/re.jpg" />`;

app.get('/', (req, res) => {
    // 主页
    res.send(path);
});

app.get('/list', (req, res) => {
    // 主页
    res.send('列表');
});

app.get('/detail', (req, res) => {
    // 主页 
    res.send('详情');
});



const server = app.listen(8991, () => {
    const address = server.address().address;
    const port = server.address().port;

    console.log(`监听http://127.0.0.1:8991`);
});
