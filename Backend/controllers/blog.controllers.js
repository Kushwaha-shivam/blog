const mongoose = require("mongoose");
const Blog = require("../models/blog.model.js");
const User = require("../models/user.model.js");


const getMessage = (req, res) => {
    res.status(200).json("This is blog message");
}

// fetch all blogs 
const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        res.status(200).json({ success: true, allBlogs });
    } catch (error) {
        res.status(400).json(error);
    }
}

// create a blog 
const addBlog = async (req, res) => {
    try {
        const { title, image, description } = req.body;
        // checks that user provides all the details required 
        if (!(title && image && description)) {
            return res.status(401).json({ success: false, message: "provide all fields" })
        }

        const addedBlog = new Blog({ title, image, description });
        await addedBlog.save();
        res.status(200).json({ success: true, message: "blog added", addedBlog });

    } catch (error) {
        res.status(400).json(error);
    }
}

// update a blog
const updateBlog = async (req, res) => {
    try {
        // const { blog_id, title, image, description } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ success: true, updatedBlog })

    } catch (err) {
        res.status(400).json(err);
    }
}

// delete a blog 
const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.body._id);
        res.status(200).json({ success: true, deletedBlog });

    } catch (err) {
        res.status(400).json(err);
    }
}


module.exports = { getMessage, getAllBlogs, addBlog, updateBlog, deleteBlog };