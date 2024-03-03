const Blog = require("../models/blog.model");


const getMessage = (req, res) => {
    res.status(200).json("This is blog message");
}

const getAllBlogs = async (req, res) => {
    try {
        const allBlogs = await Blog.find();
        res.status(200).json({ success: true, allBlogs });
    } catch (error) {
        res.status(400).json(error);
    }
}

const addBlog = async (req, res) => {
    try {
        const { title, image, description } = req.body;
        const addedBlog = await Blog.create({ title, image, description });
        res.status(200).json({ success: true, message: "blog added", addedBlog })

    } catch (error) {
        res.status(400).json(error);
    }
}

const updateBlog = async (req, res) => {
    try {
        // const { blog_id, title, image, description } = req.body;
        const updatedBlog = await Blog.findByIdAndUpdate(req.body._id, req.body);
        res.status(200).json({ success: true, updatedBlog })

    } catch (err) {
        res.status(400).json(err);
    }
}

const deleteBlog = async (req, res) => {
    try {
        const deletedBlog = await Blog.findByIdAndDelete(req.body._id);
        res.status(200).json({ success: true, deletedBlog });

    } catch (err) {
        res.status(400).json(err);
    }
}


module.exports = { getMessage, getAllBlogs, addBlog, updateBlog, deleteBlog };