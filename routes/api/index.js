//export all files from api into the outher world
const router =  require("express").Router()
const auth = require('./auth')
const promptApi = require('./prompts');
const userApi = require('./users')
const scoreApi = require('./scores')

router.use("/prompt", promptApi )
router.use("/users", userApi)
router.use("/score",scoreApi)
router.use('/auth', auth)

module.exports = router

