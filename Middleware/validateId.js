const { loadUser } = require("./LoadUser");

module.exports.validateId = (req, res, next) => {
  let newdata = req.body;
  let newId = newdata.Id;
  let valid = true;
  loadUser()
    .then((value) => {
      let previosData = JSON.parse(value);
      previosData.map((v) => {
        if (v.Id === Number(newId)) {
          valid = false;

         // console.log("HEllo");
          // return;
        }
      });
      if (!valid) {
        res.send("Id cannot be duplicated !XXXXXX! ");
      } else {
        next();
      }
    })
    .catch((error) => {
      res.send(error.message);
      console.log("Error Occured***");
    });
};
