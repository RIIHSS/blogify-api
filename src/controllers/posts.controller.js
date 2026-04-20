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

const getPostById = async(req,res) => {
    // Capture ID from URl(req.params)
    const { postId } = req.params;

    return res.status(200).json({
        success: true,
        data: {
            id: postId,
            message: `Fetching data for post with ID: ${postId}`
        }
    })
};

// Export the function so the router can use it
module.exports = {
    getAllPosts,
    getPostById
};
