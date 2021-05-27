const { signin, signup, dashboard, logout } = require('../../controllers/handlebarRenders');
const isLoggedIn = require('../../utils/isLoggedIn');

module.exports = (app) => {

    app.get('/signup', signup);

    app.get('/signin', signin);

    app.get('/homepage', isLoggedIn, dashboard);

    app.get('/logout', logout);

}