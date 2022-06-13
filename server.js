require("dotenv").config();
const express = require("express");
const app = express();

const { sequelize } = require("./db");

const path = require("path");

// Routes
const registerRoute = require("./routes/registerRoute");
const loginRoute = require("./routes/loginRoute");
const indexRoute = require("./routes/indexRoute");
const userRoute = require("./routes/userRoute");
const typesRoute = require("./routes/typesRoute");

// Middlewares
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(indexRoute);
app.use("/users", registerRoute);
app.use("/users", loginRoute);
app.use("/users", userRoute);
app.use("/types", typesRoute);

// Views
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// PORT
const PORT = process.env.PORT || 5000;

// Sync database before starting server
console.log("\nConnecting to database... \n");

sequelize
  .sync()
  .then(() => {
    console.log("\n DB sync successfull");

    // Start Server
    app.listen(
      PORT,
      console.log(` Server running on http://localhost:${PORT}`)
    );
  })
  .catch((err) => {
    console.log("DB sync not successfull: ", err, "\n");
  });
