const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("./models/Product");
const User = require("./models/User");
const Cart = require("./models/Cart");
const products = require("./data/products");

dotenv.config();

//connect to mongoodb
mongoose.connect(process.env.MONGO_URI);

//Function to seed data
const seedData = async () => {
  try {
    //Clear existing data
    await Product.deleteMany();
    await User.deleteMany();
    await Cart.deleteMany();

    //Create a  default admin User
    const createUser = await User.create({
      name: "Admin",
      email: "admin@gmail.com",
      password: "123456",
      role: "admin",
    });

    //Assign the default user ID to each product
    const userID = createUser._id;
    const sampleProducts = products.map((product) => {
      return { ...product, user: userID };
    });

    //Insert the product into DB
    await Product.insertMany(sampleProducts);

    console.log("Product Data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error("Error seeding the data", error);
    process.exit(1);
  }
};

seedData();
