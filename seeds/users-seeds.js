const sequelize = require('../config/connection.js')
const {User} = require('../models')

const userData = [
    {
        userId:1,
        username: "AmandaA",
        password: "pass1",
        userScore: 11
    },
    {
        userId: 2,
        username: "BrentoB",
        password: "pass2",
        userScore: 22
    },
    {
        userId:3,
        username: "CarolineC",
        password: "pass3",
        userScore: 33

    }
]

const userSeeds = () => User.bulkCreate(userData)
module.exports = userSeeds