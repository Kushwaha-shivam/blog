const express = require("express");
const router = express.Router();
const { getMessage, getAllBlogs, addBlog, updateBlog, deleteBlog } = require("../controllers/blog.controllers.js");

router.get("/message", getMessage);
router.post("/all_blogs", getAllBlogs);
router.post("/add_blog", addBlog);
router.post("/update_blog", updateBlog);
router.post("/delete_blog", deleteBlog);



module.exports = router;