const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/', (req, res) => {
  Prompt.findAll({
    attributes: ['title']
    })
    .then(data => {
      const dbscores = data.map((score) => score.get({ plain: true }));
      console.log(dbscores, "/////scores!///////");
      res.render("play", { dbscores });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
      
  })
module.exports = router;
