const User = require("../models/User");

//GET ALL USERS
const getAllUsersByAdmin = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//ADD NEW USER (ADMIN ONLY)
const addNewUserByAdmin = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

    let user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    user = new User({
      name,
      email,
      password,
      role: role || "customer",
    });

    await user.save();
    res.status(200).json({ message: "User created successfully", user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//UPDATE USER (ADMIN ONLY)
const updateUserByAdmin = async (req, res) => {
  try {
    const { name, email, role } = req.body;
    const { id } = req.params;

    const user = await User.findById(id);
    if (user) {
      user.name = name || user.name;
      user.email = email || user.email;
      user.role = role || user.role;
    }

    const updatedUser = await user.save();
    return res
      .status(200)
      .json({ message: "Updated successfully", user: updatedUser });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

//DELETE USER (ADMIN ONLY)
const deleteUserByAdmin = async (req, res) => {
  try {
    const user = await User.findById(req.params.id);
    if (user) {
      await user.deleteOne();
      res.status(200).json({ message: "User deleted successfully" });
    } else {
      res.status(400).json({ message: "Deleted failed" });
    }
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = {
  getAllUsersByAdmin,
  addNewUserByAdmin,
  updateUserByAdmin,
  deleteUserByAdmin,
};
