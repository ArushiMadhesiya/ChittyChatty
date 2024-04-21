const express = require("express");
const asyncHandler = require("express-async-handler");
const UserModel = require("../models/UserModel");
//------------signup
const registerUser = asyncHandler(async (req, res) => {
  const { name, email, password, pic } = req.body;
  console.log("name:", name);
  console.log("email:", email);
  console.log("pw:", password);
  if (!name || !email || !password) {
    console.warn("fill all ma'am");
    throw new Error("fill all maaaaaaaam");
  }
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    console.warn("already present");
    throw new Error("this email already in use");
  }
  const newUser = await UserModel.create({ name, email, password, pic });
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
//------------Login
const LoginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  console.log("email:", email);
  console.log("pw:", password);
  // email and its password matches
  const userExists = await UserModel.findOne({ email });
  if (userExists) {
    const check = userExists.pwMatches(password);
    if ( check) {
      res.status(201).json({
        _id: userExists._id,
        name: userExists.name,
        email: userExists.email,
        pic: userExists.pic,
      });
    }
  } else {
    res.status(400);
    res.send("user not found");
  }
});
module.exports = { registerUser, LoginUser };
