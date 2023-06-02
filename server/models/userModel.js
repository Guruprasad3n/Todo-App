const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    userName: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: [true, "Please Add the Email Address"],
      unique: [true, "Email already Exist"],
    },
    password: {
      type: String,
      require: true,
      unique: [
        false,
        "Password Should be 6 chars Long and has at least one UpperCase one LowerCase",
      ],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("user", userSchema);
