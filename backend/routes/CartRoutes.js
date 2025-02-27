const express = require("express");
const ctrls = require("../controllers/CartControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/cart
// @desc Add a product to the cart for a guest or logged-in user
// @access Public
router.post("/", ctrls.createCart);

// @route PUT /api/cart
// @desc Update product quantity in the cart for a guest or logged-in user
// @access Public
router.put("/", ctrls.updateCart);

// @route DELETE /api/cart
// @desc Remove a product from cart
// @access Public
router.delete("/", ctrls.deleteCart);

// @route GET /api/cart
// @desc GET logged-in user's cart or guest user's cart
// @access Public
router.get("/", ctrls.getCartDetails);

// @route POST /api/cart/merge
// @desc Merge guest cart into user cart on login
// @access Private
router.post("/merge", protect, ctrls.mergeCart);

module.exports = router;
