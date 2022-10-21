const express = require('express');
const morgan = require('morgan');

const api = require('./api');
const config = require('./config');
const logger = require('./utils/logger');
const errorMiddleware = require('./middleware/errorMiddleware');

const app = express();
const morganLogger = morgan(config.logFormat);

const PORT = config.port;

app.use(morganLogger);
app.use('/', api);
// Needs to be the last one
app.use(errorMiddleware);

const server = app.listen(PORT, function (err) {
  if (err) {
    logger.error(err);
    process.exit(1);
  }
  logger.log(`Server is running`);
});

const osSignals = ['SIGQUIT', 'SIGINT', 'SIGTERM'];
osSignals.forEach((signal) => {
  process.on(signal, () => {
    logger.log(`Received ${signal}`);
    server.close(() => {
      logger.log('Process terminated');
    });
  });
});

module.exports = app;
