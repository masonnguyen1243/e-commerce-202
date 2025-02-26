const userRoutes = require("../routes/UserRoutes");

const initRoutes = (app) => {
  app.use("/api/users", userRoutes);
};

module.exports = initRoutes;
