const express = require("express");
const ctrls = require("../controllers/orderControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route GET /api/orders/my-orders
// @desc GET logged-in user's orders
// @access Private
router.get("/my-orders", protect, ctrls.getUserOrders);

// @route GET /api/orders/:id
// @desc GET order details by ID
// @access Private
router.get("/:id", protect, ctrls.getOrderDetails);

module.exports = router;
