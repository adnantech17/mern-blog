const mongoose = require("mongoose");

const CategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    count: {
      type: Number,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Category", CategorySchema);
