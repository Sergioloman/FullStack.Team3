const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/', (req, res) => {
  Prompt.findAll({
    attributes: [
      'title']
    })
    .then(dbPrompt => {
      //const prompts = dbPrompt.map(prompts.get({ plain: true}));

      res.render('homepage', {
        loggedIn: req.session.loggedIn
      })
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    
})


router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

module.exports = router;
