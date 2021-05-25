const Prompt = require('./Prompt');
const Score = require('./Score');
const User = require('./User');

// here we are going to define the associations

User.hasMany(Score,{
    foreignKey:"playerId"
})
Score.belongsTo(User,{
    foreignKey:"userId",
})
Prompt.hasMany(Score,{
    foreignKey:"value"
})
Score.belongsTo(Prompt,{
    foreignKey:"promptId"
})

module.exports = {
    User,
    Prompt,
    Score,
}