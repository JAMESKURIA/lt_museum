const express = require("express");
const router = express.Router();

const User = require("../db/models/User");
// const Login = require("../db/models/Login");
const getOne = require("./getOne");
const getAll = require("./getAll");
const createItem = require("./createItem");

// Create a User
router.post("/create", (req, res) => {
  createItem(User, req)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get all Users
router.get("/", (req, res) => {
  getAll(User)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get a specific User
router.get("/:id", (req, res) => {
  getOne(User, req)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
