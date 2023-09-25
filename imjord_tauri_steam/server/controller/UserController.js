const User = require("../models/User");
const passport = require("passport");
// GET
const getUsers = async (req, res) => {
  try {
    const users = await User.find();

    return res.json(users);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error getting brobro." });
  }
};
// POST
const createUser = async (req, res) => {
  let { email, password, username } = req.body;
  try {
    const newUser = new User({
      email,
      password,
      username,
    });
    await newUser.save();
    req.session.user = newUser;
    return res
      .status(200)
      .json({ message: "user created!", session: req.session });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating bro" });
  }
};

// get the current session user

const getSessionUser = async (req, res) => {
  try {
    const userData = req.session.user;
    console.log(userData);
    if (userData) {
      return res
        .status(200)
        .json({ email: userData.email, username: userData.username });
    } else {
      return res.status(401).json({ message: "No session user found" });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error getting the session user" });
  }
};

// LOGIN

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      req.session.user = user;
      //later func for user library
      // req.session.library
      return res.json({
        message: "User is now logged in",
        session: req.session,
      });
    }

    return res.json({
      message:
        "Invalid Credentials, Please try again with correct username/password",
    });
  })(req, res, next);
};

// logout
const logoutUser = (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie("session").send("logout complete");
    }
  });
};

module.exports = {
  getUsers,
  createUser,
  loginUser,
  logoutUser,
  getSessionUser,
};
