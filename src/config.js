const ENV_DEV = 'dev';

const env = process.env.NODE_ENV ?? ENV_DEV;
const isDevMode = env === ENV_DEV;

const logFormat = isDevMode ? 'dev' : 'combined';

const config = {
  logFormat: logFormat,
  port: 3000,
  version: process.env.WEB_SERVER_VERSION ?? 'No version provided'
};

module.exports = config;
