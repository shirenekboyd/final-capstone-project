/**
 * Defines the router for reservation resources.
 *
 * @type {Router}
 */

const router = require("express").Router();
const controller = require("./reservations.controller");

router.route("/").get(controller.list);

//------------come back to--------------//
//router.route("/new").get(controller.)

module.exports = router;
