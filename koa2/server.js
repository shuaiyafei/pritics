const Koa = require('koa');
const util = require('util');
const logger = require('./util/logger');
const http = require('http');

const app = new Koa();

app.use(async(ctx, next) => {
    await next();
    const rt = ctx.response.get('X-Response-Time');
    logger.info(`${ctx.methid} ${ctx.url} - ${rt}`)
});

app.use(async (ctx, next) => {
    const start = Date.now();
    await next();
    const ms = Date.now() - start;
    ctx.set('X-Response-Time', `${ms}-ms`);
});

app.use(ctx => {
    ctx.body = util.inspect({
        status: ctx.request.type
    })
});

app.listen(3000, () => {
    logger.info(`服务启动成功`);
    logger.warn(`当前启动环境 ${app.env}`);
    logger.trace(`当前代理是否开启 ${app.proxy}`);
});


