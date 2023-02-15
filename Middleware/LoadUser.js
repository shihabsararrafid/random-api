const fs = require("fs");
module.exports.loadUser = async () => {
  let newdata;
  newdata = fs.readFileSync(
    "C:\\Node Js\\random-api\\user.json",
    "utf-8",
    (err, data) => {
      if (err) {
        console.log(err);
        return false;
      } else {
        // res.writeHead(200, { "content-type": "text/txt" });
        newdata = JSON.parse(data);
        // console.log(newdata);
        // return newdata;
        //res.send(newdata);

        //return newdata;
      }
    }
  );
  // console.log(newdata);
  return newdata;
};
