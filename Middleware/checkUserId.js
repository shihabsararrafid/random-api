const { loadUser } = require("./LoadUser");

module.exports.checkUserId = (req, res, next) => {
  let newdata = req.body;
  let newId = newdata.Id;
  let valid = false;
  loadUser()
    .then((value) => {
      let previosData = JSON.parse(value);

      previosData.map((v, x) => {
        //  console.log(v + "has index " + x);
        if (v.Id === Number(newId)) {
          valid = true;
          req.index = x;

          // console.log("HEllo");
          // return;
        }
      });
      if (valid) {
        next();
      } else {
        res.send("User not present ");
      }
    })
    .catch((error) => {
      res.send(error.message);
      console.log("Error Occured***");
    });
};
