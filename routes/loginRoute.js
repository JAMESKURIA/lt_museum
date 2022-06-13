const express = require("express");
const router = express.Router();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const { models } = require("../db");
const { Login } = models;

const validateUser = require("./validation");

// Login route
router.post("/login", validateUser, (req, res) => {
  const user = req.body.payload.success ? req.body.payload.user : null;
  const errors = !req.body.payload.success ? req.body.payload : null;

  if (user) {
    Login.findOne({
      where: {
        email: user.email.toLowerCase(),
      },
    })
      .then((data) => {
        if (data) {
          const dbUser = data.toJSON();

          const passwordMatch = bcrypt.compareSync(
            user.password,
            dbUser.password
          );

          if (passwordMatch) {
            // assign jsonwebtoken here
            const accessToken = jwt.sign(
              dbUser,
              process.env.ACCESS_TOKEN_SECRET
            );

            // res.json({ jwt: accessToken });
            // res.json({ success: true, jwt: accessToken, userId: dbUser.id });
            res.redirect("/?r=true");
          } else {
            res.json({
              success: false,
              errors: [
                {
                  path: "password",
                  message: "Please check your password and try again",
                },
              ],
            });
          }
        } else {
          res.json({
            success: false,
            errors: [
              {
                path: "email and password",
                message: "User does not exist, Check your email or register",
              },
            ],
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    res.json(errors);
  }
});

module.exports = router;
