const createItem = (Model, req) => {
  const errors = [];

  return new Promise((resolve, reject) => {
    Model.create({ ...req.body })
      .then((data) => {
        resolve({ success: true, payload: data.toJSON() });
      })
      .catch((err) => {
        const errs = err.errors;

        const _errs = err.fields;

        console.log("errs: " + err);
        // console.log("_errs: " + _errs);
        err.toString().includes("foreign key") &&
          errors.push({ path: err.parent.table, message: err.parent.detail });

        _errs &&
          errors.push({
            message: "Foreign Key constraint error",
            path: _errs,
          });

        errs &&
          errs.forEach((error) => {
            let { path, message } = error;
            let _err = { path, message };

            errors.push(_err);
          });

        reject({ success: false, errors: errors });
      });
  });
};

module.exports = createItem;
