const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Order = sequelize.define(
  "orders",
  {
    id: {
      field: "order_id",
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

module.exports = Order;
