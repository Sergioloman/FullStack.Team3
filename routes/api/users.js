const router = require('express').Router();
const {User, Score, Prompt }= require('../../models');

//get all Users
router.get("/",(req, res)=>{
    User.findAll(
        {attributes:{include: [Score.playerId],
        exclude:[User.password]}}
    )
    .then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
});

// return specific User
router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: {userId: req.params.id},
        attributes:{include: [Score.playerId]}
    }
    ).then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
})

// delete specific user

router.delete("/:id",(req, res)=>{
    User.destroy({
        where: {userId: req.params.id}
    }).then(data=>res.json(data))
    .catch(err => res.status(500).json(err))
})

module.exports = router;


