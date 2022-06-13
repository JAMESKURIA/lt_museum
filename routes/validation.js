const Login = require("../db/models/Login");

// Validation middleware
function validateUser(req, res, next) {
  let user = Login.build({ ...req.body });
  let errors = [];

  user
    .validate()
    .then((userData) => {
      const user = userData.toJSON();
      req.body.payload = { success: true, user };

      next();
    })
    .catch((err) => {
      const errs = err.errors;

      errs.forEach((error) => {
        let { path, message } = error;
        let _err = { path, message };

        errors.push(_err);
      });

      req.body.payload = { success: false, errors: errors };
      next();
    });
}

module.exports = validateUser;
