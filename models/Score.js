const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Score extends Model {}

Score.init(
  {
    score: {
      type: DataTypes.INTEGER,
        },
  },
  {
    sequelize,
  }
);

module.exports = Score;
