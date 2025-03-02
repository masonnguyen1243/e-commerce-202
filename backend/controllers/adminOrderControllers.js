const Order = require("../models/Order");

//GET all orders (ADMIN ONLY)
const getAllOrdersByAdmin = async (req, res) => {
  try {
    const orders = await Order.find({}).populate("user", "name email");
    res.json(orders);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//UPDATE order (ADMIN ONLY)
const updateOrderByAdmin = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      order.status = req.body.status || order.status;
      order.isDelivered =
        req.body.status === "Delivered" ? true : order.isDelivered;
      order.deliveredAt =
        req.body.status === "Delivered" ? Date.now() : order.deliveredAt;

      const updatedOrder = await order.save();
      res.json(updatedOrder);
    } else {
      return res.status(400).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//DELETE order (ADMIN ONLY)
const deleteOrderByAdmin = async (req, res) => {
  try {
    const order = await Order.findById(req.params.id);
    if (order) {
      await order.deleteOne();
      res.json("Order deleted successfully");
    } else {
      res.status(400).json({ message: "Order not found" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllOrdersByAdmin,
  updateOrderByAdmin,
  deleteOrderByAdmin,
};
