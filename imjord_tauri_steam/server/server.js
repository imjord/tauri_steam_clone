const PORT = 3001;
const express = require("express");
const app = express();
const cors = require("cors");
const db = require("./db/connection");

const routes = require("./routes/index");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

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
