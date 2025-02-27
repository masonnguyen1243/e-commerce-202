const userRoutes = require("../routes/UserRoutes");
const productRoutes = require("../routes/ProductRoutes");
const cartRoutes = require("../routes/CartRoutes");
const checkoutRoutes = require("../routes/CheckoutRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/checkout", checkoutRoutes);
};

module.exports = initRoutes;
