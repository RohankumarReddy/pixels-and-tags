const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: [5, "Username must be at least 5 characters long"],
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"]
  }
});

module.exports = mongoose.model('User', UserSchema);
