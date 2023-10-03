const router = require("express").Router();
const {
  getUsers,
  createUser,
  getSessionUser,
  loginUser,
} = require("../controller/UserController");

router.get("/user", getSessionUser);
router.get("/users", getUsers);
router.post("/users", createUser);
router.post("/users/login", loginUser);
router.get("/session", (req, res) => {
  res.send(req.session.user);
});
router.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
    } else {
      res.clearCookie("session").send("logout complete");
    }
  });
});
module.exports = router;
