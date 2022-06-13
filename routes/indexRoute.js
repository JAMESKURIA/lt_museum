const express = require("express");
const Art = require("../db/models/Art");
const Booking = require("../db/models/Booking");
const Type = require("../db/models/Type");
const getAll = require("./getAll");
const router = express.Router();

router.get("/", (req, res) => {
  res.render("index");
});

router.get("/cart", (req, res) => {
  res.render("cart");
});

router.get("/products", (req, res) => {
  res.render("products");
});

router.get("/shop", async (req, res) => {
  const types = await getAll(Type);

  if (types) {
    // console.log(JSON.stringify(types.data.payload));

    const products = await getAll(Art);

    if (products) {
      const forSale =
        products.data.length > 0 &&
        products.data.payload.filter((p) => p.for.toLowerCase() === "sale");

      // console.log(JSON.stringify(forSale));

      res.render("shop", {
        types: types.data.payload,
        products: forSale,
      });
    }
  }
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/bookings", async (req, res) => {


  const products = await Art.findAll({ 
    include: Booking,
    where: { 
      for: "view"
    }
  });


  if (products) {
    const forView =
    products.length > 0 &&
    products.filter((p) => p.bookings.length > 0);
    

      res.render("bookings", {
        products: forView,
      });
  }

});

module.exports = router;
