const User = require('../models/User');
const generateHash = require('../utils/generanteHash');

const signUpUser = (req, username, password, done) => {
    User.findOne({
        where: {
            username: username
        }
    }).then((user) => {
        if (user) {
            return done(null, false, {
                message: 'That email is taken, Enter a new email'
            });
        }
        else {
            const userPassword = generateHash(password);

            const data = {
                username,
                password: userPassword,
            }

            User.create(data).then((newUser) => {
                if (!newUser) {
                    return done(null, false)
                } else {
                    return done(null, newUser);
                }
            });
        }
    });
};

module.exports = signUpUser;