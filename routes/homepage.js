const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/', (req, res) => {
  Prompt.findAll({
    attributes: ['title']
    })
    .then(dbPrompt => {
      //const prompts = dbPrompt.map(prompts.get({ plain: true}));
      res.render('homepage', dbPrompt)
        {loggedIn: req.session.loggedIn}
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
    
})


router.get('/login', (req, res) => {
  res.render('login');
});

router.get("/signUp", (req, res) => {
  res.render("signup");
});

router.get('/contact', (req, res) => {
  res.render('contact');
})

router.get('/about', (req, res) => {
  res.render('about');
})

module.exports = router;
