const userSeeds = require('./users-seeds');
const promptSeeds = require('./prompt-seeds')
const scoreSeeds = require('./score-seeds');
const sequelize = require('../config/connection');

const allSeeds = async() => {
    await sequelize.sync({force: true})
    console.log('-------Lets do this-----------')

    await userSeeds()
    console.log('----USERS SEEDED------')

    await promptSeeds()
    console.log('----PROMPTS SEEDED------')

    await scoreSeeds()
    console.log('----SCORES SEEDED------')

    
    process.exit(0)

}

allSeeds()