const router = require('express').Router()

const {Prompt}= require('../../models')

router.get("/",(req, res)=>{
    Prompt.findAll({
            //return all prompts in database
    }).then(data => res.json(data))
    .catch(err => res.status(500).json(err))
});

// return specific prompt

// returning x prompt will allow us to access their data and modify it.

// we are going to fetch the prompt x data trough our game logic. 

module.exports = router;