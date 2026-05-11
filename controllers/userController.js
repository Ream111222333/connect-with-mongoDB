const mongoose = require("mongoose");
const User = require("../models/User");

const isValidId = (id) => mongoose.Types.ObjectId.isValid(id);

// Show Home Page
exports.home = (req, res) => {
  res.render("index");
};

// Get All Users
exports.getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.render("users", { users });
  } catch (error) {
    res.send(error.message);
  }
};

// Create User
exports.createUser = async (req, res) => {
  try {
    const { name, email } = req.body;

    await User.create({
      name,
      email,
    });

    res.redirect("/users");
  } catch (error) {
    res.send(error.message);
  }
};

// Update User
exports.updateUser = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email } = req.body;

    await User.findByIdAndUpdate(id, {
      name,
      email,
    });

    res.redirect("/users");
  } catch (error) {
    res.send(error.message);
  }
};

// Delete User
exports.deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    await User.findByIdAndDelete(id);

    res.redirect("/users");
  } catch (error) {
    res.send(error.message);
  }
};

// ========== JSON API Methods ==========

// API: Get All Users
exports.apiGetUsers = async (req, res) => {
  try {
    const users = await User.find().select("-__v");
    res.json({ success: true, count: users.length, data: users });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// API: Create User
exports.apiCreateUser = async (req, res) => {
  try {
    const { name, email } = req.body;
    const user = await User.create({ name, email });
    res.status(201).json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// API: Update User
exports.apiUpdateUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ success: false, message: "Invalid user ID" });
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(id, { name, email }, { new: true });
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(400).json({ success: false, message: error.message });
  }
};

// API: Delete User
exports.apiDeleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ success: false, message: "Invalid user ID" });
    const user = await User.findByIdAndDelete(id);
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, message: "User deleted" });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

// API: Get Single User
exports.apiGetUser = async (req, res) => {
  try {
    const { id } = req.params;
    if (!isValidId(id)) return res.status(400).json({ success: false, message: "Invalid user ID" });
    const user = await User.findById(id).select("-__v");
    if (!user) return res.status(404).json({ success: false, message: "User not found" });
    res.json({ success: true, data: user });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};