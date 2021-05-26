const path = require('path');
const express = require("express");
const routes = require("./routes/index");
var passport = require('passport');

// import sequelize connection
const sequelize = require("./config/connection");
//handlebars
const exphbs  = require('express-handlebars');
// const { mainModule } = require("node:process");

require('dotenv').config();


const app = express();
const PORT = process.env.PORT || 3001;

//more handlebars
app.engine('.hbs', exphbs({extname: '.hbs'}));
app.set('view engine', '.hbs');

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use(routes);

// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
