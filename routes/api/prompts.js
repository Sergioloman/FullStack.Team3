const router = require('express').Router()
const {Prompt}= require('../../models')

//get all prompts
router.get("/",(req, res)=>{
    Prompt.findAll()
    .then(data => res.render("prompts",{data}))
    .catch(err => res.status(500).json(err))
});

// return specific prompt
router.get("/:id",(req, res)=>{
    Prompt.findOne(
        {where: req.params.id}
    ).then(data=> res.render("onePrompt",{data}))
    .catch(err => res.status(500).json(err))
})

module.exports = router;