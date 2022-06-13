const express = require("express");
const router = express.Router();

const Type = require("../db/models/Type");
// const Login = require("../db/models/Login");
const getOne = require("./getOne");
const getAll = require("./getAll");

// Get all Types
router.get("/", (req, res) => {
  getAll(Type)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

// Get a specific Type
router.get("/:id", (req, res) => {
  getOne(Type, req)
    .then((data) => {
      res.json(data);
    })
    .catch((err) => {
      res.json(err);
    });
});

module.exports = router;
