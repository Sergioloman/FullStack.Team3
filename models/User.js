const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
    {
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },

        username:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        password:{
            type: DataTypes.STRING,
            allowNull:false,
            validate:{len:[3]}
        }
    },
    {
        sequelize,
    }
);

module.exports = User;