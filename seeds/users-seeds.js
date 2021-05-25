const sequelize = require('../config/connection.js')
const {User} = require('../models')

const userData = [
    {
        userId:1,
        username: "AmandaA",
        password: "pass1"
    },
    {
        userId: 2,
        username: "BrentoB",
        password: "pass2"

    },
    {
        userId:3,
        username: "CarolineC",
        password: "pass3"

    }
]

const userSeeds = () => User.bulkCreate(userData)
module.exports = userSeeds