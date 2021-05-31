const router = require('express').Router()
const {Prompt, User}= require('../../models');
const { findAll } = require('../../models/Prompt');
const passport  = require('../../passport/index')


router.post('/login', passport.authenticate('login',{
        successRedirect: '/play', //this way users get to play as soon as they are authenticated.
        failureRedirect: '/signup'
}))

//now do a fetch request to the above and then assign the id to a variable globally/pass the entire user to handlebars

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/login',
    failureRedirect: '/signup'
}));

router.get('/logout', (req,res)=>{
    req.session.destroy((err) => {
        if (err) console.error(err)
        res.redirect('/');
    })
})


module.exports = router;
