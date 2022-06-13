const sequelize = require("../sequelize");
const { Sequelize, DataTypes } = require("sequelize");

const Login = sequelize.define(
  "login",
  {
    id: {
      field: "login_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    email: {
      field: "login_email",
      type: DataTypes.STRING,
      unique: true,
      allowNull: false,
      validate: {
        len: {
          args: [6, 128],
          msg: "Email address must be between 6 and 128 characters in length",
        },
        isEmail: {
          msg: "Email address must be valid",
        },
        notEmpty: {
          msg: "Please fill in email",
        },
      },
    },
    password: {
      field: "login_password",
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: "Please fill in password",
        },
        len: {
          args: 6,
          msg: "Password must be at least 6 characters in length",
        },
      },
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
  }
);

module.exports = Login;
