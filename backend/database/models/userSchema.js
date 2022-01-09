const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  age: { type: Number, required: true },
  country: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true, unique: true },
  role: { type: String, required: true, default: "user" },
});


const salt = 10;
userSchema.pre("save", async function () {
  this.email = this.email.toLowerCase();
  this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model("User", userSchema);
