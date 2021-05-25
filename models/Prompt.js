const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Prompt extends Model {}

Prompt.init(
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    answer: {
      type: DataTypes.BOOLEAN,
    },
    promptId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    sequelize,
  }
);

module.exports = Prompt;
