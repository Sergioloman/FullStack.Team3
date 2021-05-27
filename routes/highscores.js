const router = require('express').Router();
const sequelize = require('../config/connection');
const { Prompt, User, Score } = require('../models');

router.get('/', (req,res) => {
  Score.findAll({
    attributes: ['playerId', 'score'],
    include: [User.username, Score.playerId]
    }
)
.then(data => res.render("scores",{data}))
.catch(err => res.status(500).json(err))
})

module.exports = router;
