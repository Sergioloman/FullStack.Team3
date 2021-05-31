const sequelize = require('../config/connection.js')
const {User} = require('../models')

const userData = [
    {
       id:1,
        username: "AmandaA",
        password: "pass1",
       
    },
    {
       id: 2,
        username: "BrentoB",
        password: "pass2",
        
    },
    {
       id:3,
        username: "CarolineC",
        password: "pass3",
        
    }
]

const userSeeds = () => User.bulkCreate(userData)
module.exports = userSeeds