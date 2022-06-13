const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");

require("dotenv").config();

const Login = require("../db/models/Login");

const validateUser = require("./validation");
const createItem = require("./createItem");
const User = require("../db/models/User");

// Register route
router.post("/register", validateUser, (req, res) => {
  const user = req.body.payload.success ? req.body.payload.user : null;
  const errors = !req.body.payload.success ? req.body.payload : null;

  const { name, contact, address } = req.body;

  if (user) {
    var salt = bcrypt.genSaltSync(10);
    var hash = bcrypt.hashSync(user.password, salt);
    user.password = hash;

    // Save user
    Login.build({ ...user })
      .save()
      .then(async (userData) => {
        // console.log("User added ", userData);
        const restInfo = { name, contact, address, user_login_id: userData.id };

        const userCreated = await createItem(User, { body: restInfo });

        if (userCreated) {
          // console.log("Done!", userCreated);
          // res.json(userCreated);
          res.redirect("/login?r=true");
        }
      })
      .catch((err) => {
        // Login unsuccessfull - user already exists
        let _err = err.errors[0];
        console.log(_err);

        res.json({
          success: false,
          errors: [
            {
              path: _err.path,
              message: "Email already exists",
            },
          ],
        });
      });
  } else {
    res.json(errors);
  }
});

module.exports = router;
