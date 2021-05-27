const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homepage');
const highScore = require('./highscores')

router.use ('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/highscores', highScore);


module.exports = router;
