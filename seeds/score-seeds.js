const sequelize = require('../config/connection.js')
const {Score} = require('../models')

const scoreData = [
    {
        value: 10,
        scoreId:1,
        playerId:null
    },
    {
        value: 20,
        scoreId:2,
        playerId:null
    },
    {
        value: 30,
        scoreId:3,
        playerId:null
    }


]
const scoreSeeds = () => Score.bulkCreate(scoreData)
module.exports = scoreSeeds