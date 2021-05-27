const session = require('express-session');
const passport = require('passport');
const exphbs = require('express-handlebars');
const User = require('../models/User');

module.exports = (app) => {
    require('../config/passport/passport')(passport, User);
    require('./views/index')(app);
    require('./api/index')(app, passport);

    
    app.get('/', (req, res) => {
        res.send('server is up')
    });
};