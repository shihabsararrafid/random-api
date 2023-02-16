const express = require("express");
const { getAllUser } = require("../../Controller/user.controller");
const user = require("../../Controller/user.controller");
const { checkUserId } = require("../../Middleware/checkUserId");
const { validateId } = require("../../Middleware/validateId");
const { validateUser } = require("../../Middleware/validateUser");
const router = express.Router();

router
  .route("/all")
  /**
   * @api {get}
   * @apiDescription Get all the users from the database
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} all the users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(user.getAllUser);
router
  .route("/random")
  /**
   * @api {get} /random
   * @apiDescription Get a random user from the .json file
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} get a random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .get(validateUser, user.getRandomUser);
router
  .route("/save")
  /**
   * @api {post} /save save user
   * @apiDescription save a random user with the  proper data values
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} saved a random user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .post(validateUser, validateId, user.saveAUser);
router
  .route("/update")
  /**
   * @api {update} /update Update a random user
   * @apiDescription Update a user's information in the .json file using its id
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} User updated.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .patch(checkUserId, user.updateAUser);
router
  .route("/bulk-update")
  /**
   * @api {patch} /bulk-update update multiple users
   * @apiDescription Update multiple users' information in the .json file
Take an array of user ids and assign it to the body.
   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} updated multiple users.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .patch(user.updateAllUser);
router
  .route("/delete/:id")
  /**
   * @api {delete} /delete delete user
   * @apiDescription Delete a user from the .json file using its id

   * @apiPermission admin
   *
   * @apiHeader {String} Authorization   User's access token
   *
   * @apiParam  {Number{1-}}         [page=1]     List page
   * @apiParam  {Number{1-100}}      [limit=10]  Users per page
   *
   * @apiSuccess {Object[]} deleted the user.
   *
   * @apiError (Unauthorized 401)  Unauthorized  Only authenticated users can access the data
   * @apiError (Forbidden 403)     Forbidden     Only admins can access the data
   */
  .delete(checkUserId, user.deleteAUser);
module.exports = router;
