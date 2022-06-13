const express = require("express");
const router = express.Router();
// const db = require("../database/db");

// Validation middleware
const validateUser = (req, res, next) => {
  // api call to database
  if (req.body.name == name && req.body.password == password) {
    // login
    next();
  } else {
    // tell user to check details
    res.send("Username or password error");
  }
};

router.get("/", (req, res) => {
  let sql = "SELECT * FROM USERS";

  db.query(sql, (err, results) => {
    if (err) throw err;

    res.json(results);
  });
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.post("/login", validateUser, (req, res) => {
  res.send("You will be redirected to a private route");
  //   res.redirect("A private route");
});

router.delete("/delete/:id", (req, res) => {
  res.send("Delete page");
});

// router.post("/register", (req, res) => {
//   let { fname, lname, email, password } = req.body;
//   console.log(req.body);

//   let login = `INSERT INTO LOGIN (LOGIN_EMAIL, LOGIN_PASSWORD) VALUES ('${email}', '${password}')`;

//   db.query(login, (err, result) => {
//     if (err) throw err;

//     let sql = `INSERT INTO USERS (USER_NAME, USER_LOGIN_ID) VALUES ('${fname} ${lname}', ${result.insertId})`;

//     db.query(sql, (err, result) => {
//       if (err) throw err;

//       console.log(result);

//       res.send("User added");
//     });
//   });
// });

module.exports = router;
