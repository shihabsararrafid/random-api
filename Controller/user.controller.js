const { error } = require("console");
const fs = require("fs");
const { loadUser } = require("../Middleware/LoadUser");
module.exports.getAllUser = (req, res) => {
  loadUser()
    .then((value) => {
      console.log(JSON.parse(value));
      res.send(JSON.parse(value));
    })
    .catch((error) => {
      res.send("Internal Error !! Failed to load the data");
      console.log(error.message);
    });
};
module.exports.getRandomUser = (req, res) => {
  loadUser()
    .then((value) => {
      let newdata = JSON.parse(value);
      let len = newdata.length;
      let randomDataInd = Math.floor(Math.random() * (len - 1));
      res.send(newdata[randomDataInd]);

      return res.end();
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Internal Server Error!");
    });
};
module.exports.saveAUser = (req, res) => {
  loadUser()
    .then((value) => {
      let data = JSON.parse(value);
      let newData = req.body;
      data.push(newData);
      fs.writeFileSync(
        "C:\\Node Js\\random-api\\user.json",
        JSON.stringify(data),
        (err) => {
          if (err) {
            console.log("Error occured!!");
          } else {
            console.log("Saved user!");
          }
        }
      );
      res.send("Save a user!!");
      // console.log(data);
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Failed to saved data!!!");
    });
};
module.exports.updateAUser = (req, res) => {
  res.send(" User is updated");
};
module.exports.updateAllUser = (req, res) => {
  res.send(" All the user updated");
};
module.exports.deleteAUser = (req, res) => {
  res.send("Deleted a user!");
};
