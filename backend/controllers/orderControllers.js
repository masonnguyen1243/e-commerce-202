const Order = require("../models/Order");

//GET LOGGED-IN USER'S ORDERS
const getUserOrders = async (req, res) => {
  try {
    //Find orders for the authenticated user
    const orders = await Order.find({ user: req.user._id }).sort({
      //Sort by most recent orders
      createdAt: -1,
    });
    res.status(200).json(orders);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//GET LOGGED-IN USER'S ORDERS
const getOrderDetails = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id).populate(
      "user",
      "name email"
    );

    if (!order) return res.status(404).json({ message: "Order not found" });

    //Return full order details
    res.status(200).json(order);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = { getUserOrders, getOrderDetails };
