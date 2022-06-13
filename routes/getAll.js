const getAll = (Model) => {
  return new Promise((resolve, reject) => {
    Model.findAll()
      .then((data) => {
        const length = data.length;
        if (data.length === 0) {
          resolve({
            success: true,
            data: { length: length, payload: [] },
          });
        }
        resolve({
          success: true,
          data: { length: length, payload: data },
        });
      })
      .catch((err) => {
        // console.log("Error: ", err);
        reject({ success: false, message: "Some unknown error occurred" });
      });
  });
};

module.exports = getAll;
