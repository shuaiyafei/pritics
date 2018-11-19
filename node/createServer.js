const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.write('ttttt');
    res.end();
});

server.listen(8998, () => {
    console.log(`http://127.0.0.1:8998`);
});