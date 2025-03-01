const express = require("express");
const ctrls = require("../controllers/SubscribeControllers");

const router = express.Router();

// @route POST /api/subscribe
// @desc handle newsletter subscription
// @access Public
router.post("/subscribe", ctrls.subscribe);

module.exports = router;
