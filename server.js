const path = require('path');
const express = require("express");
const session	= require('express-session');
const routes = require("./routes");
const passport = require('passport');
const localStrategy	= require('passport-local').Strategy;
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser')
// import sequelize connection
const sequelize = require("./config/connection");

//handlebars
const exphbs  = require('express-handlebars');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;
app.use(passport.initialize());
app.use(passport.session());
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
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())
app.use(routes);
app.post('/test', (req, res)=>{
  console.log(req.body)
  res.json(req.body)
})

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
