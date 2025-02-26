const userRoutes = require("../routes/UserRoutes");
const productRoutes = require("../routes/ProductRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
  app.use("/api/products", productRoutes);
};

module.exports = initRoutes;
