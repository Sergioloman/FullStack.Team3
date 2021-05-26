const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(

  {
    usernameField: 'username'
  },
  function(username, password, done) {
    console.log(password)
      db.User.findOne({ username: username}, (err, user) => {
        if (err) {
          console.log('normal error')
          return done(err)
        }
        if (!user) {
          console.log("User doesn't exist")
          return done(null, false, {message: 'Incorrect password' })
        }
        else {
          console.log('Success')
          return done(null, user)
        }
      })
  })

  module.exports = strategy