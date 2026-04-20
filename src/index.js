const express = require('express');
const app = express();
const PORT = 3000;

// 1. Import the post routes
const postRoutes = require('./routes/posts.routes.js');

// 2. Mount the routes at the specific prefix
// This means every route inside posts.routes.js starts with /api/v1/posts
app.use('/api/v1/posts', postRoutes);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});