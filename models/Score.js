const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Score extends Model {}

Score.init(
    {
        value:{
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        
    },
    {
        sequelize,
    }
);

module.exports = Score;