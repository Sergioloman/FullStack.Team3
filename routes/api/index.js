//export all files from api into the outher world
const router =  require("express").Router()
const auth = require('./auth')
const promptApi = require('./prompts');
const userApi = require('./users')
const scoreApi = require('./scores')

router.use("/prompts", promptApi )
router.use("/users", userApi)
router.use("/scores",scoreApi)
router.use('/auth', auth)

module.exports = router

