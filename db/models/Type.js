const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Type = sequelize.define(
  "art_types",
  {
    id: {
      field: "art_type_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "art_type_name",
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Type;
