const Product = require("../models/Product");

//GET all products (ADMIN ONLY)
const getAllProductsByAdmin = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products)
      return res.status(400).json({ message: "Products not found" });

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getAllProductsByAdmin };
