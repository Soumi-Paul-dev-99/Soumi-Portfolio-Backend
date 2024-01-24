const mongoose = require("mongoose");
const userModel = new mongoose.Schema({
  name: {
    type: String,
  },
  email: {
    type: String,
  },
  msg: {
    type: String,
  },
});

const message = mongoose.model("Message", userModel);
module.exports = message;
