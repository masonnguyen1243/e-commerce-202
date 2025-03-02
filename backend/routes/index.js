const userRoutes = require("../routes/UserRoutes");
const productRoutes = require("../routes/ProductRoutes");
const cartRoutes = require("../routes/CartRoutes");
const checkoutRoutes = require("../routes/CheckoutRoutes");
const orderRoutes = require("../routes/orderRoutes");
const uploadRoutes = require("../routes/uploadRoutes");
const subscriberRoutes = require("./subscriberRoutes");
const adminRoutes = require("./AdminRoute");
const productAdminRoutes = require("./productAdminRoutes");

const initRoutes = (app) => {
  //API ROUTES
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/cart", cartRoutes);
  app.use("/api/checkout", checkoutRoutes);
  app.use("/api/orders", orderRoutes);
  app.use("/api/upload", uploadRoutes);
  app.use("/api", subscriberRoutes);

  //ADMIN
  app.use("/api/admin/users", adminRoutes);
  app.use("/api/admin/products", productAdminRoutes);
};

module.exports = initRoutes;
