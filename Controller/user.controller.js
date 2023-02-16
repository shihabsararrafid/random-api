const { error } = require("console");
const fs = require("fs");
const { findUser } = require("../Middleware/findUser");
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
      let msg;
      fs.writeFileSync(
        "C:\\Node Js\\random-api\\user.json",
        JSON.stringify(data)
      );
      res.send("user!!");
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Failed to save data!!!");
    });
};
module.exports.updateAUser = (req, res) => {
  // console.log(req.index);
  let index = req.index;
  // console.log(findUser())
  let updateData = req.body;
  loadUser()
    .then((value) => {
      let previosData = JSON.parse(value);
      console.log(findUser(previosData, updateData.Id));
      //genderaddress contact photoUrl
      if ("name" in updateData) {
        previosData[index].name = updateData.name;
      }
      if ("gender" in updateData) {
        previosData[index].gender = updateData.gender;
      }
      if ("address" in updateData) {
        previosData[index].address = updateData.address;
      }
      if ("contact" in updateData) {
        previosData[index].contact = updateData.contact;
      }
      if ("photoUrl" in updateData) {
        previosData[index].photoUrl = updateData.photoUrl;
      }
      fs.writeFileSync(
        "C:\\Node Js\\random-api\\user.json",
        JSON.stringify(previosData)
      );
      res.send("user!!");
      // console.log(previosData);
      //if()
    })
    .catch((error) => {
      console.log(error.message);
      res.send("Failed to save data!!!");
    });
  // res.send(" User is updated");
};
module.exports.updateAllUser = (req, res) => {
  const newData = req.body;
  loadUser().then((value) => {
    let previosData = JSON.parse(value);
    for (let i = 0; i < newData.length; i++) {
      let index = findUser(previosData, newData[i].Id);
      if ("name" in newData[i]) {
        previosData[index].name = newData[i].name;
      }
      if ("gender" in newData[i]) {
        previosData[index].gender = newData[i].gender;
      }
      if ("address" in newData[i]) {
        previosData[index].address = newData[i].address;
      }
      if ("contact" in newData[i]) {
        previosData[index].contact = newData[i].contact;
      }
      if ("photoUrl" in newData[i]) {
        previosData[index].photoUrl = newData[i].photoUrl;
      }
      console.log(index);
    }
    fs.writeFileSync(
      "C:\\Node Js\\random-api\\user.json",
      JSON.stringify(previosData)
    );
    // res.send("user!!");
  });

  res.send(" All the user updated");
};
module.exports.deleteAUser = (req, res) => {
  let idnew = req.params.id;
  console.log(idnew);
  loadUser()
    .then((value) => {
      let previosData = JSON.parse(value);
      let newData = previosData.filter((d) => d.Id !== Number(idnew));
      console.log(typeof idnew);
      fs.writeFileSync(
        "C:\\Node Js\\random-api\\user.json",
        JSON.stringify(newData)
      );
      res.send("Deleted User-_-");
    })
    .catch((error) => res.send(error.message));
};
