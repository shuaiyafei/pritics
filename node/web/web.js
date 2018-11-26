// client 客户端
// server 服务器
// Business 业务层
// Data

const http = require('http');
const fs = require('fs');
const url = require('url');

http.createServer((req, res) => {
    const pathname = url.parse(req.url).pathname;
    console.log(`request for ${pathname}\n`);
    fs.readFile(pathname.substr(1), (err, data) => {
        if (err) {
            console.log(`err ${err}`);
    
            fs.readFile('404.html', (e, v) => {
                if (e) {
                    console.log(e);
                }
                res.write(v.toString());
            });
        } else {
            console.log(`data ${data}\n`);
            res.writeHead(200, {'content-type': 'text/html'});
            res.write(data.toString());
        }
        res.end();
    })
}).listen(8993);

console.log(`监听http://127.0.0.1:8993`);