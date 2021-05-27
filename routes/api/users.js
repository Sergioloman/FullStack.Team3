const router = require('express').Router();
const {User, Score, Prompt }= require('../../models');
const withAuth = require("../../utils/auth");


//get all Users
router.get("/",(req, res)=>{
    User.findAll(
        {attributes:{include: [Score.playerId],
        exclude:[User.password]}}
    )
    .then(data => res.render("Users",{data}))
    .catch(err => res.status(500).json(err))
});

// return specific User
router.get("/:id",(req, res)=>{
    User.findOne(
    {
        where: {userId: req.params.id},
        attributes:{include: [Score.playerId]}
    }
    ).then(data=> res.render("oneUser",{data}))
    .catch(err => res.status(500).json(err))
})

// delete specific user

router.delete("/:id",(req, res)=>{
    User.destroy({
        where: {userId: req.params.id}
    }).then(data=>res.json(data))
    .catch(err => res.status(500).json(err))
})

///======sample code from mvc ======//
router.post("/login", (req, res) => {
User.findOne({
  where: {
    username: req.body.username,
    password: req.body.password,
  },
}).then((dbUserData) => {
  if (!dbUserData) {
    res
      .status(400)
      .json({ message: "No user associated this email address" });
    return;
  }

  const validPassword = dbUserData.checkPassword(req.body.password);

  if (!validPassword) {
    res
      .status(400)
      .json({ message: "Incorrect password. Please try again." });
    return;
  }

  req.session.save(() => {
    // declare session variables
    req.session.user_id = dbUserData.id;
    req.session.username = dbUserData.username;
    req.session.loggedIn = true;

    res.json({
      user: dbUserData,
      message: "You have successfully logged in",
    });
  });
});
});

router.post("/logout", withAuth, (req, res) => {
if (req.session.loggedIn) {
  req.session.destroy(() => {
    res.status(204).end();
  });
} else {
  res.status(404).end();
}
});

// ===== sample code ended =======


module.exports = router;