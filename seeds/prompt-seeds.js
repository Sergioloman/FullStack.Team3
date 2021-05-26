const sequelize = require('../config/connection.js')
const {Prompt} = require('../models')

const promptData = [
    {
        promptId:1,
        title:"Did you eat spicy food today?",
        promptScore: 10,
    },
    {
        promptId:2,
        title:"Did you ride a bicycle today?",
        promptScore: 20,
    },
    {
        promptId:3,
        title:"Have you pet an animal today?",
        promptScore: 30,
    }

]
const promptSeeds = () => Prompt.bulkCreate(promptData)
module.exports = promptSeeds