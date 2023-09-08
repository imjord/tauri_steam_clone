const PORT = 3001;
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/connection");
// passport / sessions
const passport = require("passport");
require("./utils/passport")(passport);
const session = require("express-session");
const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    // credentials: true,
  })
);
app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: true,
    cookie: {
      httpOnly: true,
      maxAge: 3600000,
    },
  })
);
// passport middleware
app.use(passport.initialize());
app.use(passport.session());

app.use("/", routes);

db.once("open", () => {
  console.log("connected to db");
});

db.on("error", (error) => {
  console.error("db error", error);
});

app.listen(PORT, () => {
  console.log(`server on ${PORT}`);
});
