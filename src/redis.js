const Redis = require('ioredis');

const config = require('./config');

let redis;

const { port, password, host } = config.redis;

try {
  redis = new Redis({
    lazyConnect: true,
    port: port,
    host: host,
    password: password,
    db: 0,
    maxRetriesPerRequest: 10,
    retryDelayOnTryAgain: 250,
    family: 4,
    connectTimeout: 10000
  });
} catch (e) {
  console.error(e);
}

module.exports = redis;
