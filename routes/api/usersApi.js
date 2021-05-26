const router = require('express').Router()
const {User, Score, Prompt }= require('../../models')

//get all Users
router.get("/",(req, res)=>{
    User.findAll(
        {attributes:{include: [Score.playerId],
        exclude:[User.password]}}
    )
    .then(data => res.render("Users",{data}))
    .catch(err => res.status(500).json(err))
});

// return specific User
router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: req.params.id,
        attributes:{include: [Score.playerId]}
    }
    ).then(data=> res.render("oneUser",{data}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;