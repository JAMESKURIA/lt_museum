const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const Booking = sequelize.define(
  "bookings",
  {
    id: {
      field: "booking_id",
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      field: "booking_viewing_date",
      type: DataTypes.DATE,
    },
    availableTickets: {
      field: "booking_tickets_available",
      type: DataTypes.INTEGER,
    },
    soldTickets: {
      field: "booking_tickets_sold",
      type: DataTypes.INTEGER,
    },
  },
  {
    freezeTableName: true,
    timestamps: false,
    underscored: true,
  }
);

module.exports = Booking;
