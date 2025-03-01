const express = require("express");
const { protect, admin } = require("../middlewares/authMiddleware");
const ctrls = require("../controllers/AdminControllers");

const router = express.Router();

// @route GET /api/admin/users
// @desc GET all users (ADMIN ONLY)
// @access Private
router.get("/", protect, admin, ctrls.getAllUsersByAdmin);

// @route POST /api/admin/users
// @desc Add a new users (ADMIN ONLY)
// @access Private
router.post("/", protect, admin, ctrls.addNewUserByAdmin);

// @route PUT /api/admin/users/:id
// @desc Update users info (ADMIN ONLY)
// @access Private
router.put("/:id", protect, admin, ctrls.updateUserByAdmin);

// @route DELETE /api/admin/users/:id
// @desc Delete users (ADMIN ONLY)
// @access Private
router.delete("/:id", protect, admin, ctrls.deleteUserByAdmin);

module.exports = router;
