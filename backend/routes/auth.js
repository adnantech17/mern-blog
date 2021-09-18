const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { loginValidation, registerValidation } = require("../models/validation");

router.post("/register", async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const emailCheck = await User.findOne({ email: req.body.email });
  if (emailCheck) return res.status(400).send("Email already exists.");

  // Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });

  try {
    const savedUser = await user.save();
    res.send({ user: user._id });
  } catch (err) {
    res.status(400).send(err);
  }
});

router.post("/login", async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) res.status(400).send(error.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("Email or password is wrong.");

  // Hashing Password
  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass)
    return res.status(400).send("Email and password do not match.");

  const token = jwt.sign({ _id: user._id }, process.env.TOKEN_SECRET);
  res.send(token);
});

module.exports = router;
