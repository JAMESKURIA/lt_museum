const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Feedback = sequelize.define(
  "feedback",
  {
    id: {
      field: "feedback_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Feedback;
