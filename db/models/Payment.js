const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Payment = sequelize.define(
  "payments",
  {
    id: {
      field: "payment_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: {
      field: "payment_type",
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Payment;
