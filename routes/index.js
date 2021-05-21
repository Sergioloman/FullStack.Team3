const router = require('express').Router();

// const apiRoutes = require('./api/');
const promptRoutes = require('./api/prompts');

router.use('/', promptRoutes);

module.exports = router;
