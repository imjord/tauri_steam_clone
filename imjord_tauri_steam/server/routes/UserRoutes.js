const router = require("express").Router();
const { getUsers, createUser } = require("../controller/UserController");

router.get("/users", getUsers);
router.post("/users", createUser);

module.exports = router;
