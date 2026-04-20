const express = require('express');
const router = express.Router();
const postsController = require('../controllers/posts.controller.js');

router.get('/', postsController.getAllPosts);

router.get('/:postId', postsController.getPostById);

module.exports = router;
