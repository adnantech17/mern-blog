const router = require("express").Router();
const Tag = require("../models/Tag");

router.post("/", async (req, res) => {
  const newTag = Tag(req.body);

  try {
    const savedTag = await newTag.save();
    res.status(200).json(savedTag);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const cats = await Tag.find();
    res.status(200).json(cats);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
