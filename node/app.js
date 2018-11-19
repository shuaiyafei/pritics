const http = require('http');

const hostname = '127.0.0.1';
const port = 8999;

const server = http.createServer((req, res) => {
    res.writeHead('200', {'Content-type': 'text/plain'});
    res.end('t');
});


server.listen(port, hostname, () => {
    console.log(`当前监听http://${hostname}:${port}`);
});