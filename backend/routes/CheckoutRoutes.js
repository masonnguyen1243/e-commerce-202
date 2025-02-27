const express = require("express");
const ctrls = require("../controllers/CheckoutControllers");
const { protect } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/checkout
// @desc Create a new checkout session
// @access Private
router.post("/", protect, ctrls.createCheckout);

// @route PUT /api/checkout/:id/pay
// @desc Update checkout to mark as paid after successful payment
// @access Private
router.put("/:id/pay", protect, ctrls.updateCheckout);

// @route POST /api/checkout/:id/finalize
// @desc Finalize checkout and convert to an order after payment confirmation
// @access Private
router.post("/:id/finalize", protect, ctrls.finalizeCheckout);

module.exports = router;
