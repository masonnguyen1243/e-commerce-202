const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const initRoutes = require("./routes/index");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

dotenv.config();

const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOST_NAME;

//Connect to MongoDB
connectDB();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

// API Routes
initRoutes(app);

app.listen(PORT, HOSTNAME, () => {
  console.log(`Server is running on http://${HOSTNAME}:${PORT}`);
});
