const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(

  {
    usernameField: 'username'
  },
  function(username, password, done) {
      db.User.findOne({ username: username }, function (err, user) {
        if (err) return done(err);
        if (!user) return done(null, false, { message: 'Incorrect username.' });
    
        bcrypt.compare(password, user.password, function (err, res) {
          if (err) return done(err);
          if (res === false) return done(null, false, { message: 'Incorrect password.' });
          
          return done(null, user);
        });
      });
  })

  // function isLoggedIn(req, res, next) {
  //   if (req.isAuthenticated()) return next();
  //   res.redirect('/login');
  // }
  
  // function isLoggedOut(req, res, next) {
  //   if (!req.isAuthenticated()) return next();
  //   res.redirect('/');
  // }

  module.exports = strategy