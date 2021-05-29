const router = require('express').Router()
const {User, Score, Prompt }= require('../../models')

//get all Scores
router.get("/",(req, res)=>{
    Score.findAll(
        {
            //attributes:{include: [Score.playerId, User.username],
            //include: [Score.playerId, User.username]
            attributes: ['score','playerId'],
            //include: [{model: User,atributes:['username']}]
        }
    )
    .then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
});

// return specific User
router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: {userId:req.params.id},
    } 
    ).then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
})


//a single prompt score
router.get("/:id",(req, res)=>{
    Prompt.findOne(
    {
        where: {userId:req.params.id},
    } 
    ).then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
})

//update user single user score

router.put("/:id",(req, res)=>{
    Score.update({
        score: req.body.score
    },
    {
        where: {
            id: req.params.id
          }
    }

    ).then(data=>res.json(data))
    .catch(err => res.status(500).json(err))
})

module.exports = router;