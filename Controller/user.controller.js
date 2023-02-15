// module.exports.getAllUser = (req, res, next) => {
//   res.send("All User got");
//   //next();
// };
module.exports.getAllUser = (req, res) => {
  res.send("Single user found");
};
module.exports.getRandomUser = (req, res) => {
  res.send("Get a random user");
};
