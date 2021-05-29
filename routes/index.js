const router = require('express').Router();
const apiRoutes = require('./api');
const homeRoutes = require('./homepage');
const highScore = require('./highscores')
const playRoute = require('./play')

router.use ('/', homeRoutes);
router.use('/api', apiRoutes);
router.use('/highscores', highScore);
router.use('/play', playRoute);

module.exports = router;
