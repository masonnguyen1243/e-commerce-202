const express = require("express");
const ctrls = require("../controllers/ProductControllers");
const { protect, admin } = require("../middlewares/authMiddleware");

const router = express.Router();

// @route POST /api/products
// @desc Create a new product
// @access Private
router.post("/", protect, admin, ctrls.createProduct);

// @route PUT /api/products/:id
// @desc Update an existing product
// @access Private
router.put("/:id", protect, admin, ctrls.updateProduct);

// @route DELETE /api/products/:id
// @desc DELETE an existing product by ID
// @access Private
router.delete("/:id", protect, admin, ctrls.deleteProduct);

// @route GET /api/products
// @desc GET all existing products with optional query filters
// @access Public
router.get("/", ctrls.getProducts);

module.exports = router;
