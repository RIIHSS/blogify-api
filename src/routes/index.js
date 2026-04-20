const express = require('express');
const router = express.Router();
const postRoutes = require('./posts.routes.js');

router.use('/posts', postRoutes);

module.exports = router;