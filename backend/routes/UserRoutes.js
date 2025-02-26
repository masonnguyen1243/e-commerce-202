const express = require("express");
const ctrls = require("../controllers/UserControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/users/register
// @desc Register a new User
// @access Public
router.post("/register", ctrls.register);

// @route POST /api/users/login
// @desc Authenticate user
// @access Public
router.post("/login", ctrls.login);

// @route GET /api/users/profile
// @desc Get logged-in user's profile (Protected route)
// @access Private
router.get("/profile", protect, ctrls.profile);

module.exports = router;
