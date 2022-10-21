const config = require('../config');

const router = require('express').Router();

router.get('/', (req, res) => {
  res.send('Hello world!');
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
