const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Artist = sequelize.define(
  "artists",
  {
    id: {
      field: "artist_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      field: "artist_name",
      type: DataTypes.STRING,
    },
    address: {
      type: DataTypes.STRING,
      field: "artist_address",
    },
    contact: {
      field: "artist_contact",
      type: DataTypes.STRING,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Artist;
