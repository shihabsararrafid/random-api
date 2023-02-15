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
