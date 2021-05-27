const router = require('express').Router();
const sequelize = require('../config/connection');
const { Prompt, User, Score } = require('../models');

router.get('/', (res,req) => {
  Score.findAll(
    {attributes:{include: [Score.playerId, User.username]
    }}
)
.then(data => res.render("Scores",{data}))
.catch(err => res.status(500).json(err))
})

module.exports = router;
