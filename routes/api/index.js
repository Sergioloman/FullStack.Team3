//export all files from api into the outher world
const router =  require("express").Router()

const promptApi = require('./prompts');
const userApi = require('./users')
const scoreApi = require('./scores')

router.use("/prompt", promptApi )
router.use("/users", userApi)
router.use("/score",scoreApi)

module.exports = router

