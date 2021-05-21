const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Prompt extends Model {}

Prompt.init(
    {
        title:{
            type: DataTypes.STRING,
        }
    },
    {
        sequelize,
    }
);

module.exports = Prompt;