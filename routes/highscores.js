const router = require("express").Router();
const sequelize = require("../config/connection");
const { Prompt, User, Score } = require("../models");

//how can i introduce the username corresponding to the id as well???
router.get('/', (req, res) => {
  Score.findAll({
    attributes: ['score'],
    include: {model: User,
              attributes:['username']}
    })
    .then((data) => {
            const dbscores = data.map((score) => score.get({ plain: true }));
  
            console.log(data)
            console.log(dbscores, "/////scores!///////");
            
            res.render("scores", { dbscores });
          })
          .catch((err) => res.status(500).json(err));
          
})


module.exports = router;
