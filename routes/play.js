const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/', (req, res) => {
  Prompt.findAll({
    attributes: ['title','promptScore']
    })
    .then(data => {
      const dbprompt = data.map((score) => score.get({ plain: true }));
      console.log(dbprompt, "/////prompt!///////");
      res.render("play", { dbprompt });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
      
  })
module.exports = router;
