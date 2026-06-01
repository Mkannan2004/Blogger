const express = require("express");
const router = express.Router();

const Blog = require("../models/Blog");

router.get("/", async (req, res) => {

  const blogs = await Blog.find();

  res.json(blogs);

});

router.post("/", async (req, res) => {

  const newBlog = new Blog(req.body);

  await newBlog.save();

  res.json(newBlog);

});

module.exports = router;