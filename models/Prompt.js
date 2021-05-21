const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Prompt extends Model {}

Prompt.init(
    {
        title:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        answer:{
            type: DataTypes.BOOLEAN,
        }
    },
    {
        sequelize,
    }
);

module.exports = Prompt;