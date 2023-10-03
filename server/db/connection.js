const mongoose = require("mongoose");
require("dotenv").config();

// local mongodb://127.0.0.1:27017/imjord_tauri_steam / or ur own env process.env.MONGO_URI
mongoose.connect("mongodb://127.0.0.1:27017/imjord_tauri_steam");
module.exports = mongoose.connection;
