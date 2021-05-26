const Prompt = require('./Prompt');
const Score = require('./Score');
const User = require('./User');

// here we are going to define the associations

User.hasOne(Score,{
    foreignKey:"playerId",
})
Score.belongsTo(User,{
    foreignKey:"userId",
})

module.exports = {
    User,
    Prompt,
    Score,
}