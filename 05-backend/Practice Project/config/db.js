// db.js
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const connection = mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  

module.exports = connection;
