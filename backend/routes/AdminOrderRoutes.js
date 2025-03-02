const express = require("express");
const ctrls = require("../controllers/adminOrderControllers");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route GET /api/admin/orders
// @desc GET all orders (ADMIN ONLY)
// @access Private
router.get("/", protect, admin, ctrls.getAllOrdersByAdmin);

// @route PUT /api/admin/orders/:id
// @desc UPDATE an order (ADMIN ONLY)
// @access Private
router.put("/:id", protect, admin, ctrls.updateOrderByAdmin);

// @route DELETE /api/admin/orders/:id
// @desc DELETE an order (ADMIN ONLY)
// @access Private
router.delete("/:id", protect, admin, ctrls.deleteOrderByAdmin);

module.exports = router;
