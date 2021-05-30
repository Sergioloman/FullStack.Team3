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
    },
    {
        promptId:4,
        title:"Did you beat a videogame today?",
        promptScore: 40,
    },
    {
        promptId:5,
        title:"Have you gone for a swim today?",
        promptScore: 50,
    },
    {
        promptId:6,
        title:"Did you meet a famous superstar?",
        promptScore: 60,
    },
    {
        promptId:7,
        title:"Are you on vacations right now?",
        promptScore: 70,
    },
    {
        promptId:8,
        title:"Did you go to a metal show last night?",
        promptScore: 80,
    },
    {
        promptId:9,
        title:"Did you save someone's life today?",
        promptScore: 90,
    },
    {
        promptId:10,
        title:"Did you win the lottery?",
        promptScore: 100,
    },

]
const promptSeeds = () => Prompt.bulkCreate(promptData)
module.exports = promptSeeds