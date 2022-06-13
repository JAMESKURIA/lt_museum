const sequelize = require("./sequelize");

const Login = require("./models/Login");
const User = require("./models/User");
const Art = require("./models/Art");
const Artist = require("./models/Artist");
const Booking = require("./models/Booking");
const Feedback = require("./models/Feedback");
const Order = require("./models/Order");
const Payment = require("./models/Payment");
const Shipment = require("./models/Shipment");
const Type = require("./models/Type");

const models = {
  Login,
  User,
  Art,
  Artist,
  Booking,
  Feedback,
  Order,
  Payment,
  Shipment,
  Type,
};

// Relationships

Login.hasMany(User, {
  foreignKey: "user_login_id",
});

Type.hasMany(Art, {
  foreignKey: "art_type_id",
});

Artist.hasMany(Art, {
  foreignKey: "art_artist_id",
});

Art.hasMany(Booking, {
  foreignKey: "booking_art_id",
});

Art.hasMany(Order, {
  foreignKey: "order_art_id",
});
User.hasMany(Order, {
  foreignKey: "oder_user_id",
});

User.hasMany(Payment, {
  foreignKey: "payment_user_id",
});
Order.hasMany(Payment, {
  foreignKey: "payment_order_id",
});

Order.hasMany(Shipment, {
  foreignKey: "shipment_order_id",
});

User.hasMany(Feedback, {
  foreignKey: "feedback_user_id",
});
Shipment.hasMany(Feedback, {
  foreignKey: "feedback_shipment_id",
});
Art.hasMany(Feedback, {
  foreignKey: "feedback_art_id",
});

module.exports = { sequelize, models };
