const express = require("express");
const app = express();
const mongoose = require("mongoose");
const env = require("dotenv");

env.config();

// Import Routers
const authRoute = require("./routes/auth");
const categoryRoute = require("./routes/category");
const tagsRoute = require("./routes/tag");
const postRoute = require("./routes/post");

// Connect to DB
mongoose.connect(process.env.DB_CONNECT, (err) => {
  if (err) {
    throw err;
  } else console.log("Connected to db");
});

// Middle wares
app.use(express.json());

// Route Middlewares
app.use("/api/user", authRoute);
app.use("/api/category", categoryRoute);
app.use("/api/tags", tagsRoute);
app.use("/api/posts", postRoute);

app.listen(5000, () => console.log("Backend Server is running"));
