const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required:true,
  },
  username: {
    type: String,
    required:true,
  },
  email: {
    type: String,
    required:true,
    unique:true
  },
  phoneNumber: {
    type: String,
    required:true,
    unique:true

  },
  password: {
    type: String,
    required:true,
  },
  confirmPassword: {
    type: String,
    required:true,
  },
  gender: {
    type: String,
    required:true,
  },
});
module.exports = new mongoose.model("User", userSchema);
