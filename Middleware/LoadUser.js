const fs = require("fs");
module.exports.loadUser = async () => {
  let newdata;
  newdata = fs.readFileSync("C:\\Node Js\\random-api\\user.json", "utf-8");

  return newdata;
};
