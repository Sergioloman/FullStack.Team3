const router = require('express').Router();

const prompt = require('./prompts');

router.use('/prompt', prompt);

module.exports = router;
