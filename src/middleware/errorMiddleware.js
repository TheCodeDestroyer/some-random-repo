const logger = require('../utils/logger');
const ApiError = require('../utils/ApiError');

// Unused param next needs to remain
const errorMiddleware = function (err, req, res) {
  if (err && err.stack) {
    logger.error(err.stack);
  }

  res.contentType('application/json');

  if (err instanceof ApiError) {
    const { statusCode, message } = err;

    res.status(statusCode).json({ message });

    return;
  }

  res.status(500).send({ message: 'Something went wrong!' });
};

module.exports = errorMiddleware;
