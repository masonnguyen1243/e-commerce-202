const userRoutes = require("../routes/UserRoutes");
const productRoutes = require("../routes/ProductRoutes");
const cartRoutes = require("../routes/CartRoutes");
const checkoutRoutes = require("../routes/CheckoutRoutes");
const orderRoutes = require("../routes/orderRoutes");
const uploadRoutes = require("../routes/uploadRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/checkout", checkoutRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/upload", uploadRoutes);
};

module.exports = initRoutes;
