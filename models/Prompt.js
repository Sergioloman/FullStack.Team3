const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Prompt extends Model {}

Prompt.init(
  {
    promptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    promptScore: {
      type: DataTypes.INTEGER
    }
  },
  {
    sequelize,
  }
);

module.exports = Prompt;
