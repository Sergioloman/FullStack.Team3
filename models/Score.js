const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class Score extends Model {}

Score.init(
  {
    value: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
          model: "Prompt",
          key: "promptId"
      }
    },
    scoreId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId:{
        type: DataTypes.INTEGER,
        references:{
            model:"User",
            key:"userId"
        }
    }
  },
  {
    sequelize,
  }
);

module.exports = Score;
