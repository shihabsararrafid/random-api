const fs = require("fs");
//const file = require(__dirname + "user.json");
module.exports.loadUser = async () => {
  let newdata;

  newdata = fs.readFileSync(__dirname + "./../Controller/user.json", "utf-8");
 // console.log(file);
  return newdata;
};
