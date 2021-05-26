const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

//we want users to see previous scores

//render handlebars
module.exports = router;
