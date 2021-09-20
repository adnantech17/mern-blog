const router = require("express").Router();
const Post = require("../models/Post");
const Tag = require("../models/Tag");
const Category = require("../models/Category");
const { postVerify, editDeleteVerify } = require("./verifyToken");

router.post("/", postVerify, async (req, res) => {
  const userId = req.user._id;

  var tags = await Tag.find();
  var tagList = [];
  var cat = await Category.findOne({ name: req.body.category });
  if (cat)
    await Category.updateOne(
      { name: req.body.category },
      { count: cat.count + 1 }
    );

  tags.map((tag) => tagList.push(tag.name));

  req.body.tags.map((tag) => {
    if (tagList.includes(tag)) return;
    console.log(tag);
    const newTag = Tag({ name: tag });
    try {
      newTag.save();
    } catch (err) {
      console.log(err);
    }
  });

  const newPost = Post({
    title: req.body.title,
    desc: req.body.desc,
    user_id: userId,
    tags: req.body.tags,
    category: req.body.category,
  });
  console.log(newPost);

  try {
    const savedPost = await newPost.save();
    res.status(200).json(savedPost);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get("/:id", async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);
    res.status(200).json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete("/:id", editDeleteVerify, async (req, res) => {
  var cat = await Category.findOne({ name: req.body.category });
  if (cat)
    await Category.updateOne(
      { name: req.body.category },
      { count: cat.count - 1 }
    );

  try {
    await Post.findByIdAndDelete(req.params.id);
    res.status(200).json("Deleted Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

router.put("/:id", editDeleteVerify, async (req, res) => {
  console.log(req.body);
  try {
    await Post.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      { new: true }
    );
    res.status(200).json("Updated Successfully");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
