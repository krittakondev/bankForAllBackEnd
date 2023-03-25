const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    fullname: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    phoneNumber: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    balance: {
      type: Number,
      default: 0,
    },
    microfinanceBalance: {
      type: Number,
      default: 0,
    },
    peerShareBalance: {
      type: Number,
      default: 0,
    },
    creditScore: {
      type: String,
      default: "A",
    },
    currentDE: {
      type: String,
      default: "0",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("User", userSchema);