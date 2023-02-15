// module.exports.getAllUser = (req, res, next) => {
//   res.send("All User got");
//   //next();
// };
const fs = require("fs");
module.exports.getAllUser = (req, res) => {
  fs.readFile("C:\\Node Js\\random-api\\user.json", "utf-8", (err, data) => {
    if (err) {
      console.log(err);
      res.end(" Failed to load the data from server!!!!!!!!");
    } else {
      // res.writeHead(200, { "content-type": "text/txt" });
      console.log("success");
      const newdata = JSON.parse(data);
      res.send(newdata);

      return res.end();
    }
  });
  //res.send(data);
};
module.exports.getRandomUser = (req, res) => {
  res.send("Get a random user");
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
