const express = require("express");
const { getAllUser } = require("../../Controller/user.controller");
const user = require("../../Controller/user.controller");
const router = express.Router();

router.route("/all").get(user.getAllUser);
router.route("/random").get(user.getRandomUser);
//router.route("/random").get(user.getRandomUser);

module.exports = router;
