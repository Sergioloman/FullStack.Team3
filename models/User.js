const { Model, DataTypes } = require("sequelize");
const sequelize = require("../config/connection.js");

class User extends Model {}

User.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },

    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: { len: [3] },
    },
  },
  {
    //for some reason Hooks does not let me log in....
    // hooks: {
    //   // set up beforeCreate lifecycle "hook" functionality
    //   async beforeCreate(newUserData) {
    //     newUserData.password = await bcrypt.hash(newUserData.password, 10);
    //     return newUserData;
    //   },

    //   async beforeUpdate(updatedUserData) {
    //     updatedUserData.password = await bcrypt.hash(
    //       updatedUserData.password,
    //       10
    //     );
    //     return updatedUserData;
    //   },
    // },

    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "User",
  }
);
//we are missing  a function that refers to password.
module.exports = User;
