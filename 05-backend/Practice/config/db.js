const mongoose = require('mongoose');

const connection = mongoose.connect('mongodb://0.0.0.0:27017/brush-up')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.error("MongoDB connection error:", err);
  });

module.exports = connection;
