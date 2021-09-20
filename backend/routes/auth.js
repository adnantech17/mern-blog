const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginValidation, registerValidation } = require("../models/validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) {
    res.status(400).json({ err: error.details[0].message });
    return;
  }

  const emailCheck = await User.findOne({ email: req.body.email });
  if (emailCheck) {
    res.status(400).json({ err: "Email already exists." });
    return;
  }

  // Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    await user.save();
    res.json({ user: user._id });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) {
    res.status(400).json({ err: error.details[0].message });
    return;
  }

  const user = await User.findOne({ email: req.body.email });
  if (!user) {
    res.status(400).json({ err: "Email or password is wrong." });
    return;
  }

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) {
    res.status(400).json({ err: "Email and password do not match." });
    return;
  }

  const token = await jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.cookie("auth-token", token).json({ "auth-token": token });
});

module.exports = router;
