const express = require('express');
const router = express.Router();

// 1. Import Controller.
const postsController = require('../controllers/posts.controller.js');

// 2. Use controller function as handler
router.get('/', postsController.getAllPosts);

module.exports = router;
