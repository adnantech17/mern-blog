const jwt = require("jsonwebtoken");
const Post = require("../models/Post");

function postVerify(req, res, next) {
  const token = req.cookies["auth-token"];
  if (!token) {
    res.status(401).json({ err: "You must login first!" });
    return;
  }

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;
    next();
  } catch (err) {
    console.log(err);
    res.status(400).json({ err: "Invalid Token" });
  }
}

const editDeleteVerify = async (req, res, next) => {
  const token = req.cookies["auth-token"];
  const post = await Post.findById(req.params.id);

  if (post === null) return res.status(404).send("Not Found");
  console.log(post);
  if (!token) return res.status(401).send("You must login first!");

  try {
    const verified = jwt.verify(token, process.env.TOKEN_SECRET);
    req.user = verified;

    if (verified._id === post.user_id) next();
    else res.status(403).send("403 Forbidden");
  } catch (err) {
    console.log(err);
    res.status(400).send("Invalid Token");
  }
};

module.exports.postVerify = postVerify;
module.exports.editDeleteVerify = editDeleteVerify;
