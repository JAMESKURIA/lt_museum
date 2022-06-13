const getOne = (Model, req) => {
  return new Promise((resolve, reject) => {
    const id = req.params.id;

    Model.findByPk(id)
      .then((data) => {
        if (!data) {
          resolve({
            success: true,
            data: { length: 0, payload: [] },
          });
        }
        resolve({
          success: true,
          data: { length: data && data.length, payload: data },
        });
      })
      .catch((err) => {
        console.log("Error: ", err);
        reject({ success: false, payload: "Some unknown error occurred" });
      });
  });
};

module.exports = getOne;
