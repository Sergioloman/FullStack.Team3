const router = require('express').Router();
const sequelize = require('../config/connection');
const {Prompt, User, Score } = require('../models');
// include a login section for users to log in.

router.get('/', (req, res) => {
  Prompt.findAll({
    attributes: ['title','promptScore']
    })
    .then(data => {
      const dbprompt = data.map((score) => score.get({ plain: true }));
      console.log(dbprompt, "/////prompt!///////");
      res.render("play", { dbprompt });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });


    
  User.findOne({
        attributes: ['username','id'],
        where: {username: req.user.username}
  })
  .then(data=> {
    res.json(data)
    console.log(data,"XXXXXXXX")
    if (req.user){
    res.render('play',{data})
  }})
  .catch(err => res.status(500).json(err))
      
  })

// as soon as users get into the page, fetch their info
// router.get('/', (req,res)=>{
//     User.findOne(
//         {where: {username: req.user.username}}
//     )
//     .then(data=> {
//       res.json(data)
//       console.log(data,"XXXXXXXX")
//       if (req.user){
//       res.render('play',{data})
//     }})
//     .catch(err => res.status(500).json(err))
// })
  
  //return specific User///is this even necessary? play should be only for the render of play
  router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: {id:req.params.id}
    }
    ).then(data=> {
      res.json(data)
    })
    .catch(err => res.status(500).json(err))
  })
  


  module.exports = router;
