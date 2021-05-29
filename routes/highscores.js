const router = require("express").Router();
const sequelize = require("../config/connection");
const { Prompt, User, Score } = require("../models");


router.get('/', (req, res) => {
  Score.findAll({
    attributes: ['score']
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
