const router = require('express').Router()
const {Prompt}= require('../../models')



router.post('/login', passport.authenticate('local-signup', {
    successRedirect: '/dashboard',
    failureRedirect: '/signup'
}

));
