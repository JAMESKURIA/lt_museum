const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const User = sequelize.define(
  "users",
  {
    id: {
      field: "user_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "user_name",
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      field: "user_address",
    },
    contact: {
      field: "user_contact",
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = User;
