const express = require("express");
const ctrls = require("../controllers/productAdminControllers");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route GET /api/admin/products
// @desc GET all products by admin
// @access Private
router.get("/", protect, admin, ctrls.getAllProductsByAdmin);

module.exports = router;
