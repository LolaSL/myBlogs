import Blog from '../models/';
import User from '../model/User.js';


export const getAllBlogs = async (req, res, next) => {
    let blogs;
    try {
        blogs = await Blog.find().populate('user');
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error' });
    }

    if (!blogs) {
        return res.status(404).json({ message: 'No blogs found.' });
    }
    return res.status(200).json({ blogs });
}
import mongoose from 'mongoose';



export const addBlog = async (req, res, next) => {
    const { title, description, image, user} = req.body;

    if (!mongoose.Types.ObjectId.isValid(user)) {
        return res.status(400).json({ message: 'Invalid user ID' });
    }

    let existingUser;
    try {
        existingUser = await User.findById(user);
    } catch (err) {
        console.log(err);
    }

    if (!existingUser) {
        return res.status(404).json({ message: 'Unable to find user by this ID' });
    }

    const blog = new Blog({
        title,
        description,
        image,
        user
    });

    try {
        const session = await mongoose.startSession();
        session.startTransaction();
        await blog.save({ session });
        existingUser.blogs.push(blog);
        await existingUser.save({ session });
        await session.commitTransaction();
    } catch (err) {
        console.log(err);
        return res.status(500).json({ message: 'Internal server error', error: err });
    }

    return res.status(200).json({ blog });
};



export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndUpdate(blogId, { title, description })
    } catch (err) {
        console.log(err)
    }
    if (!blog) {
        return res.status(500).json({ message: "Unable to update blog" });
    }
    return res.status(200).json({ blog });
}

export const getById = async (req, res, next) => {

    let blog;
    const id = req.params.id;
    try {
        blog = await Blog.findById(id)

    } catch (err) {
        console.log(err)
    }
    if (!blog) {
        return res.status(404).json({ message: "No blog found..." });
    }
    return res.status(200).json({ blog });
}

export const removeBlog = async (req, res, next) => {
    const id = req.params.id;
    let blog;
    try {
        blog = await Blog.findByIdAndRemove(id).populate('user');
        await blog.user.blogs.pull(blog);
        await blog.user.save();
    } catch (err) {
        console.log(err)
    }
    if (!blog) {
        return res.status(400).json({ message: "Unable to remove blog" });
    }
    return res.status(200).json({ message: "Blog was removed successfully!" });
}


export const getByUserId = async (req, res, next) => {

    const userId = req.params.id;
    let userBlogs;

    try {
        userBlogs = await User.findById(userId).populate('blogs');

    } catch (err) {
        console.log(err)
    }
    if (!userBlogs) {
        return res.status(404).json({ message: "No blog found..." });
    }
    return res.status(200).json({ user: userBlogs });
}
