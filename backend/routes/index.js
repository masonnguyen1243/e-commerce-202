const userRoutes = require("../routes/UserRoutes");
const productRoutes = require("../routes/ProductRoutes");
const cartRoutes = require("../routes/CartRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
  app.use("/api/cart", cartRoutes);
};

module.exports = initRoutes;
