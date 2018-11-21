const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

const host = '127.0.0.1';
const port = 8995;

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain;charset=utf-8'});
    // 第二个参数true 表示生成的query可以为一个对象
    const params = url.parse(req.url, true).query;
    res.write(`id: ${params.id}\n`);
    res.write(`type: ${params.type}\n`);
    res.write(`group: ${params.group}`);    

    res.end();
});

server.listen(port, host, () => {
    console.log(`当前监听为${host}:${port}\n`);
    console.log(`点击跳转http://${host}:${port}/firstPath/secondPath/finalContent?id=1&type=get&group=1`)
});