const _ = require('lodash');
const logger = require('./utils/logger');
const ENV_DEV = 'dev';

const env = process.env.NODE_ENV || ENV_DEV;
const isDevMode = env === ENV_DEV;

const logFormat = isDevMode ? 'dev' : 'combined';

const requiredEnvVariables = ['REDIS_PASSWORD', 'REDIS_PORT', 'REDIS_HOST'];

let hasMissingVars = false;

_.forEach(requiredEnvVariables, (requiredEnv) => {
  if (!_.has(process.env, requiredEnv)) {
    hasMissingVars = true;
    logger.error(`Missing ${requiredEnv} env variable`);
  }
});

if (hasMissingVars) {
  // eslint-disable-next-line no-console
  console.error('Exiting...');
  process.exit(1);
}

const config = {
  logFormat,
  port: 3000,
  version: process.env.WEB_SERVER_VERSION || 'No version provided',
  redis: {
    port: process.env.REDIS_PORT,
    password: process.env.REDIS_PASSWORD,
    host: process.env.REDIS_HOST
  }
};

module.exports = config;
