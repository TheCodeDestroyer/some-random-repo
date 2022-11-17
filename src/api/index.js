const config = require('../config');
const logger = require('../utils/logger');
const redis = require('../redis');

const router = require('express').Router();

const handleHealthCheck = (req, res) => {
  res.sendStatus(200);
};

router.get('/', async (req, res) => {
  try {
    const calledTimes = await redis.incr('called');

    res.send(`Hello! This app was called (${calledTimes}) of times!`);
  } catch (e) {
    logger.error(e);

    res.send(`There was an error connecting to redis.`);
  }
});

router.get('/healthz', handleHealthCheck);
router.get('/readyz', handleHealthCheck);
router.get('/livez', handleHealthCheck);

router.get('/favico.ico', (req, res) => {
  res.sendStatus(404);
});

router.get('/version', (req, res) => {
  res.status(200).send({
    version: config.version
  });
});

module.exports = router;
