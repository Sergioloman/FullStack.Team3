const router = require('express').Router()
const {User, Score, Prompt }= require('../../models')

//get all Scores
router.get("/",(req, res)=>{
    Score.findAll(
        {
            attributes: ['score','userId'],
            //how can i show the name of the user here? why is my answer 'null'?
            include: [
                { 
                    model: User,
                    attributes: ['username']
                },
                
            ]
        }
    )
    .then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
});

// return specific User score by id
router.get("/:id",(req, res)=>{
    Score.findOne(
    {
        where: {userId:req.params.id},
        include: [
            { 
                model: User,
                attributes: ['username']
            },
            
        ]
    } 
    ).then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
})

//**this could use some work...*/
//update user single user score

router.put("/:id",(req,res)=>{
    console.log(req.body, req.params.id,'this is the new score! ')
    Score.update(
    {
        score: req.body.score
    },
    {
        where: {userId: req.params.id}
    }

    ).then(data=>res.json(data))
    .catch(err => res.status(500).json(err))
})

module.exports = router;