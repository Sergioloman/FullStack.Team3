const db = require("../models");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");
const strategy = new LocalStrategy(
  {
    usernameField: "username",
    passwordField: "password",
  },
  function (username, password, done) {
    console.log(username);
     db.User.findOne({
       where: { username: username }
    }).then(user =>{
      console.log(user, "this is a string so you can see me!");
      if (user) {
        return done(null, false, { message: "username already taken!" });
      } else {
        const generateHash = (password) => {
          return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
        };
        const userPassword = generateHash(password);
        db.User.create({
          username: username,
          password: userPassword,
        }).then((newUser) => {
          console.log(newUser, "///////////Welcome to Karp! user!////////////");
          if (!newUser) {
            return done(null, false);
          } else {
            return done(null, newUser);
          }
        });
      }
    })
  }
);
module.exports = strategy;