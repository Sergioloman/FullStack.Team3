const signupStrat = require('./signupStrat')
const loginStrat = require('./loginStrat')
const db = require('../models')
const passport = require('passport');
const bcrypt = require('bcrypt');

passport.serializeUser((user, done) => {
  console.log('*** serializeUser called, user: ')
  done(null, { _id: user._id })
})


passport.deserializeUser((id, done) => {
  console.log('DeserializeUser called')
  db.User.findOne(
    { _id:id },
    'username',
    (err, user) => {
      console.log ('*** DeserializeUser called, user:')
      console.log(user)
      done(null, user)
    })
})

passport.use("signup" ,signupStrat)
passport.use("login" ,loginStrat)
module.exports = passport;