/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/")
  .get(controller.list)
  .post(controller.create)
  .all(methodNotAllowed);

  //route connects to app.js /reservations
// router.route("/new")
  
//   .all(methodNotAllowed);

module.exports = router;
