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

<<<<<<< HEAD
// Passport.js
app.use(passport.initialize());
app.use(passport.session());
// app.use(require('./passport'));

/// ==== sample code =====
passport.serializeUser(function (user, done) {
	done(null, user.id);
});

passport.deserializeUser(function (id, done) {
	User.findById(id, function (err, user) {
		done(err, user);
	});
});

passport.use(new localStrategy(function (username, password, done) {
	User.findOne({ username: username }, function (err, user) {
		if (err) return done(err);
		if (!user) return done(null, false, { message: 'Incorrect username.' });

		bcrypt.compare(password, user.password, function (err, res) {
			if (err) return done(err);
			if (res === false) return done(null, false, { message: 'Incorrect password.' });
			
			return done(null, user);
		});
	});
}));

function loggedIn(req, res, next) {
	if (req.isAuthenticated()) return next();
	res.redirect('/login');
}

function loggedOut(req, res, next) {
	if (!req.isAuthenticated()) return next();
	res.redirect('/');
}

// ROUTES
// app.get('/', loggedIn, (req, res) => {
// 	res.render("homepage", { title: "Home" });
// });

app.get('/', (req, res) => {
	res.render("homepage", { title: "About" });
});

app.get('/login', loggedOut, (req, res) => {
	const response = {
		title: "Login",
		error: req.query.error
	}

	res.render('login', response);
});

app.post('/login', passport.authenticate('local', {
	successRedirect: '/',
	failureRedirect: '/login?error=true'
}));

app.get('/logout', function (req, res) {
	req.logout();
	res.redirect('/');
});

// Setup our admin user
app.get('/setup', async (req, res) => {
	const exists = await User.exists({ username: "admin" });

	if (exists) {
		res.redirect('/login');
		return;
	};

	bcrypt.genSalt(10, function (err, salt) {
		if (err) return next(err);
		bcrypt.hash("pass", salt, function (err, hash) {
			if (err) return next(err);
			
			const newAdmin = new User({
				username: "admin",
				password: hash
			});

			newAdmin.save();

			res.redirect('/login');
		});
	});
});

/// ==== sample code ended =====

// sync sequelize models to the database, then turn on the server
=======
>>>>>>> 6c1791ab6e5c07200e4c96589a4abd0c87db8373
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  });
});
