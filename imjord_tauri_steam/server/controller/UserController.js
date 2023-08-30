const User = require("../models/User");

const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error getting brobro." });
  }
};

const createUser = async (req, res) => {
  let { email, password, username } = req.body;
  try {
    const newUser = new User({
      email,
      password,
      username,
    });
    await newUser.save();
    return res.status(200).json({ message: "user created!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating bro" });
  }
};

module.exports = { getUsers, createUser };
