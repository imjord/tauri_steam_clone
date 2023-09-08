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
    return res.status(200).json({ message: "user created!" });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: "Error creating bro" });
  }
};

// LOGIN

const loginUser = (req, res, next) => {
  passport.authenticate("local", (err, user) => {
    if (err) {
      console.log(err);
    }
    if (user) {
      req.session.user = user.username;
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

module.exports = { getUsers, createUser, loginUser, logoutUser };
