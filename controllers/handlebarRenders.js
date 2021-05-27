const signup = (req, res) => {
    res.render('signup')
};

const signin = (req, res) => {
    res.render('signin')
};


const logout = (req, res) => {
    req.session.destroy(err => {
        if (err) console.error(err);
        res.redirect('/');
    });
};

module.exports = {
    signup,
    signin,
    logout
}