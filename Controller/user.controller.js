const { error } = require("console");
const fs = require("fs");
const { loadUser } = require("../Middleware/LoadUser");
module.exports.getAllUser = (req, res) => {
  // fs.readFile("C:\\Node Js\\random-api\\user.json", "utf-8", (err, data) => {
  //   if (err) {
  //     console.log(err);
  //     res.end(" Failed to load the data from server!!!!!!!!");
  //   } else {
  //     // res.writeHead(200, { "content-type": "text/txt" });
  //     console.log("success");
  //     const newdata = JSON.parse(data);
  //     res.send(newdata);

  //     return res.end();
  //   }
  // });
  //res.send(data);
  loadUser()
    .then((value) => {
      // const res = JSON.parse(value);
      // if (res instanceof error) {
      //   res.send("error occured");
      // } else {
      console.log(JSON.parse(value));
      res.send(JSON.parse(value));
      //}
    })
    .catch((error) => {
      res.send("Internal Error !! Failed to load the data");
      console.log(error.message);
    });
  // res.send("done");
  // console.log(dat);
  // if (!dat) {
  //   res.send("Failed to load data from server!! ");
  // } else {
  //   res.send(dat);
  // }
};
module.exports.getRandomUser = (req, res) => {
  fs.readFile("C:\\Node Js\\random-api\\user.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.end(" Failed to load the data from server!!!!!!!!");
    } else {
      // res.writeHead(200, { "content-type": "text/txt" });
      //console.log("success");
      const newdata = JSON.parse(data);
      let len = newdata.length;
      let randomDataInd = Math.floor(Math.random() * (len - 1));
      res.send(newdata[randomDataInd]);

      return res.end();
    }
  });
};
module.exports.saveAUser = (req, res) => {
  res.send("Save a user!!");
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
