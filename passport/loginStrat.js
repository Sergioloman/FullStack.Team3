const db = require('../models')
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcrypt');

const strategy = new LocalStrategy(

  {
    usernameField: 'username', 
    passwordField: 'password'
  },
  function(username, password, done) {
      db.User.findOne( { where: {username: username} } )
      .then(user=>{
        
        if (!user) return done(null, false, { message: 'Username does not exist!.' });

        const isValidPassword = (userpass, password) => {
            return bcrypt.compareSync(password, userpass);
        };
        if (!isValidPassword(user.password, password)){
            return done(null, false,{
                message: "incorrect password!"
            })
        }

        return done(null, user.get())


    })
    .then((returningUser)=>{
      console.log(returningUser, '////////Welcome Back!///////')
    })
        
     
  })

  module.exports = strategy