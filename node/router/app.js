const router = require('./router');
const server = require('./server');

server.start(router.route);