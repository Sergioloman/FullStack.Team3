const router = require('express').Router();
const {User, Score, Prompt }= require('../../models');

//get all Users
router.get("/",(req, res)=>{
    User.findAll()
    .then(data=> res.json(data))
    .catch(err => res.status(500).json(err))
});

// return specific User
router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: {id:req.params.id}
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


