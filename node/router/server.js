const http = require('http');
const url = require('url');

const start = (route) => {
    const server = http.createServer((req, res) => {
        const pathname = url.parse(req.url).pathname;
        if (pathname == '/favicon.ico') {
            return;
        }
        const content = JSON.stringify(route(pathname));
        res.writeHead(200, {
            'content-type': 'text/plain'
        });
        res.end(content);
    });
    server.listen(8997, () => {
        console.log(`服务已经启动\n监听端口http://127.0.0.1:8997`);
    });
}

exports.start = start;