/**
 * Controller to handle fetching all posts
 */
const getAllPosts = (req, res) => {
    // This is the logic we moved from the routes file
    res.json({
        message: "Successfully fetched all posts",
        data: [
            { id: 1, title: "My First Post" },
            { id: 2, title: "Learning Modular Routing" },
            { id: 3, title: "Mastering the Controller Pattern" }
        ]
    });
};

// Export the function so the router can use it
module.exports = {
    getAllPosts
};