const router = require('express').Router()

const {Prompt}= require('../../models')

router.get("/",(req, res)=>{
    Prompt.findAll({

    }).then(data => res.json(data))
    .catch(err => res.status(500).json(err))
});



module.exports = router;