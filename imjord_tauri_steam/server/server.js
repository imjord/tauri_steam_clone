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
const MongoStore = require("connect-mongo");
require("dotenv").config();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:1420",
    credentials: true,
  })
);
// http://localhost:1420"

// session store db

const options = {
  mongoUrl: "mongodb://127.0.0.1:27017/imjord_tauri_steam",
};

const store = MongoStore.create(options);

app.use(
  session({
    secret: "secret",
    saveUninitialized: true,
    resave: false,
    store: store,
    cookie: {
      maxAge: 8 * 60 * 60 * 1000,
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
