const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller.js');

router.get('/', postsController.getAllPosts);

router.get('/:postId', postsController.getPostById);

router.post('/', postsController.createPost);

router.patch('/:postId', postsController.updatePost);

router.delete('/:postId', postsController.deletePost);

module.exports = router;
