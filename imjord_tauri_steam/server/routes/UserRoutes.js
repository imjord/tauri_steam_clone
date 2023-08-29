const router = require("express").Router();
const { getUsers } = require("../controller/UserController");

router.get("/users", getUsers);

module.exports = router;
