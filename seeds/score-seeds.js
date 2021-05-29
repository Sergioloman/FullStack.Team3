const sequelize = require('../config/connection.js')
const {Score} = require('../models')

const scoreData = [
    {
        score: 10,
        
        userId:1
    },
    {
        score: 20,
        
        userId:2
    },
    {
        score: 30,
        userId:3
    }


]
const scoreSeeds = () => Score.bulkCreate(scoreData)
module.exports = scoreSeeds