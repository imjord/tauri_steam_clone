const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error bro." });
  }
};

module.exports = { getUsers };
