const Redis = require('ioredis');

const logger = require('./utils/logger');
const config = require('./config');

let redis;

const { port, password, host } = config.redis;

try {
  redis = new Redis({
    lazyConnect: true,
    port,
    host,
    password,
    db: 0,
    maxRetriesPerRequest: 10,
    retryDelayOnTryAgain: 250,
    family: 4,
    connectTimeout: 10000
  });
} catch (e) {
  logger.error(e);
}

module.exports = redis;
