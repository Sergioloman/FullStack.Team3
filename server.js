const path = require('path');
const express = require("express");
const session	= require('express-session');
const routes = require("./routes");
const passport = require('passport');
const localStrategy	= require('passport-local').Strategy;
const bcrypt = require('bcrypt');


// //require('./routes/routes')(app);

//

// import sequelize connection
const sequelize = require("./config/connection");

//handlebars
const exphbs  = require('express-handlebars');
// const { mainModule } = require("node:process");

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

//more handlebars
app.engine('handlebars', exphbs({
  layoutsDir: __dirname + '/views/layouts',
  }));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'handlebars');
app.use(session({
	secret: "secret",
	resave: false,
	saveUninitialized: true
}));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// Passport.js
app.use(passport.initialize());
app.use(passport.session());
// app.use(require('./passport'));

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
