const config = require('../config');
const logger = require('../utils/logger');
const redis = require('../redis');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const calledTimes = await redis.incr('called');

    res.send(`Hello! This app was called (${calledTimes}) of times!`);
  } catch (e) {
    logger.error(e);

    res.send(`There was an error connecting to redis.`);
  }
});

router.get('/healthcheck', (req, res) => {
  res.status(200).send('OK');
});

router.get('/version', (req, res) => {
  res.status(200).send({
    version: config.version
  });
});

module.exports = router;
