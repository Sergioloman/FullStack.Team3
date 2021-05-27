const router = require('express').Router()
const {Prompt}= require('../../models')
const passport  = require('../../passport/index')


router.post('/login', passport.authenticate('login', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
}));

router.post('/signup', passport.authenticate('signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
}));

router.get('/logout', (req,res)=>{
    req.session.destroy((err) => {
        if (err) console.error(err)
        res.redirect('/');
    })
})


module.exports = router;
