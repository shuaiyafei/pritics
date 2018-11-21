const http = require('http');
const url = require('url');
const querystring = require('querystring');
const util = require('util');

const port = 8994;
const hostname = '127.0.0.1';

//post 请求
const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'content-type': 'text/plain; charset:utf-8'
    });

    let data = '';
    req.on('data', (chunk) => {
        data += chunk;
    });

    req.on('end', (data) => {
        data = querystring.parse(data);
        res.end(data);
    });

    res.end();
});

server.listen(port, hostname, () => {
    console.log('服务启动成功\n');
    console.log(`监听http://${hostname}:${port}`);
})