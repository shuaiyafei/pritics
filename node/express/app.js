const express = require('express');
const util = require('util');

const app = express();

app.get('/', (req, res) => {
    res.send('hello');
});

app.get('/index', (req, res) => {
    res.end('world');
});

app.get('/params', (req, res) => {
    res.end(util.inspect(req.get()));
});

const server = app.listen(8992, () => {
    const port = server.address().port;
    console.log(`监听http://127.0.0.1:${port}`);
});
