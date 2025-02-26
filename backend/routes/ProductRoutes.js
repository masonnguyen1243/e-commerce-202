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

// @route GET /api/products/new-arrivals
// @desc Retrieve latest 8 products - Created date
// @access Public
router.get("/new-arrivals", ctrls.getNewArrivals);

// @route GET /api/products/best-seller
// @desc Retrieve the products with highest rating
// @access Public
router.get("/best-seller", ctrls.getBestSellerProduct);

// @route GET /api/products/:id
// @desc GET a single Product by ID
// @access Public
router.get("/:id", ctrls.getProduct);

// @route GET /api/products/similar/:id
// @desc Retrieve similar products based on the current product's gender and category
// @access Public
router.get("/similar/:id", ctrls.getSimilarProduct);

module.exports = router;
