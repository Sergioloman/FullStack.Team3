const sequelize = require('../config/connection.js')
const {Score} = require('../models')

const scoreData = [
    {
        score: 10,
        
        playerId:1
    },
    {
        score: 20,
        
        playerId:2
    },
    {
        score: 30,
        playerId:3
    }


]
const scoreSeeds = () => Score.bulkCreate(scoreData)
module.exports = scoreSeeds