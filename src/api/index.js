const config = require('../config');
const redis = require('../redis');

const router = require('express').Router();

router.get('/', async (req, res) => {
  try {
    const calledTimes = await redis.incr('called');

    res.send(`Hello! This app was called (${calledTimes}) of times!`);
  } catch {
    res.send(`There was an error connecting to redis after trying 10 times.`);
  }
});

router.get('/ping', (req, res) => {
  res.send('Pong!');
});

router.get('/version', (req, res) => {
  res.status(200).send({
    version: config.version
  });
});

module.exports = router;
