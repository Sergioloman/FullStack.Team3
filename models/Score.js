const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Score extends Model {}

Score.init(
  {
    score: {
      type: DataTypes.INTEGER,
        },
    playerId:{
        type: DataTypes.INTEGER,
        references:{
            model:"Users",
            key:"userId"
        }
    }
  },
  {
    sequelize,
  }
);

module.exports = Score;
