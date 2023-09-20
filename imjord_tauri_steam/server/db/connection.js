const mongoose = require("mongoose");
require("dotenv").config();

// local mongodb://127.0.0.1:27017/imjord_tauri_steam
mongoose.connect(process.env.MONGO_URI);

module.exports = mongoose.connection;
