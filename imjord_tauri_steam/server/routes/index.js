const router = require("express").Router();
const UserRoutes = require("./UserRoutes");

router.use("/api", UserRoutes);

module.exports = router;
