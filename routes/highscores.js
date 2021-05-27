const router = require('express').Router();
const sequelize = require('../config/connection');
const { Prompt, User, Score } = require('../models');

router.get("/", (req,res) => {
  Score.findAll({
    attributes: ['score', 'playerId'],
    }
)
.then(data => res.render('Scores', {data}))
.catch(err => res.status(500).json(err))
})

module.exports = router;
