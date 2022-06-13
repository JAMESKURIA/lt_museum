const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Art = sequelize.define(
  "arts",
  {
    id: {
      field: "art_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "art_name",
      type: DataTypes.STRING,
    },
    price: {
      field: "art_price",
      type: DataTypes.STRING,
    },
    for: {
      field: "art_for",
      type: DataTypes.STRING,
    },
    image: {
      field: "art_image",
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Art;
