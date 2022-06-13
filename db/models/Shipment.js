const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Shipment = sequelize.define(
  "shipments",
  {
    id: {
      field: "shipment_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    address: {
      field: "shipment_address",
      type: DataTypes.STRING,
    },
    date: {
      field: "shipment_date",
      type: DataTypes.DATE,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Shipment;
