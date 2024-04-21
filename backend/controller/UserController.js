const express = require("express");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, pw, pic } = req.body;
  console.log("name:", name);
  console.log("email:", email);
  console.log("pw:", pw);
  if (!name || !email || !pw) {
    console.warn("fill all ma'am");
    throw new Error("fill all maaaaaaaam");
  }
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    console.warn("already present");
    throw new Error("this email already in use");
  }
  const newUser = await UserModel.create({ name, email, pw, pic });
  if (newUser) {
    res.status(201).json({
      _id: newUser._id,
      name: newUser.name,
      email: newUser.email,
      pic: newUser.pic,
    });
  } else {
    res.status(400);
    res.send("user couldnt be registered");
  }
});

module.exports = { registerUser };
