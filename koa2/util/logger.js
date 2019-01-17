const log4js = require('log4js');
const logger = log4js.getLogger();


module.exports = {
    trace: (msg) => {
        logger.level = 'trace';
        logger.trace(msg);
    },
    debug: (msg) => {
        logger.level = 'debug';
        logger.debug(msg);
    },
    info: (msg) => {
        logger.level = 'info';
        logger.info(msg);
    },
    warn: (msg) => {
        logger.level = 'warn';
        logger.warn(msg);
    },
    error: (msg) => {
        logger.level = 'error';
        logger.error(msg);
    },
    fatal: (msg) => {
        logger.level = 'fatal';
        logger.fatal(msg);
    },
};