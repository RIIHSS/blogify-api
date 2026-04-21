const postService = require('../services/posts.service');

// 1. Get All Posts
const getAllPosts = async (req, res) => {
    try {
        const posts = await postService.getAllPosts();
        res.status(200).json({ success: true, data: posts });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 2. Get Post By ID
const getPostById = async (req, res) => {
    try {
        const post = await postService.getPostById(req.params.postId);
        if (!post) return res.status(404).json({ success: false, message: "Post not found" });
        res.status(200).json({ success: true, data: post });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// 3. Create Post
const createPost = async (req, res) => {
    try {
        const newPost = await postService.createPost(req.body);
        res.status(201).json({ success: true, data: newPost });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 4. Update Post
const updatePost = async (req, res) => {
    try {
        const updatedPost = await postService.updatePost(req.params.postId, req.body);
        res.status(200).json({ success: true, data: updatedPost });
    } catch (error) {
        res.status(400).json({ success: false, message: error.message });
    }
};

// 5. Delete Post
const deletePost = async (req, res) => {
    try {
        await postService.deletePost(req.params.postId);
        res.status(200).json({ success: true, data: {} });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

// EXPORT ALL FUNCTIONS AT THE BOTTOM
module.exports = {
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost
};