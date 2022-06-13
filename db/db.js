const mysql = require("mysql");
const dotenv = require("dotenv");
dotenv.config();

const { DB_HOST, DB_USER, DB_PASS, DB_NAME } = process.env;

const db = mysql.createConnection({
  host: DB_HOST,
  user: DB_USER,
  password: DB_PASS,
  database: DB_NAME,
});

// db.connect((err) => {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log("\nDatabase connected... \n");

//     db.query("SELECT * FROM LOGIN", (err, results) => {
//       if (err) throw err;

//       results.forEach((result) => {
//         console.log(result);
//       });
//     });
//   }
// });

module.exports = db;
