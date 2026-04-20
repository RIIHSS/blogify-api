const express = require('express');
const router = express.Router();

router.get('/', (req,res) =>{
    res.json({
        message: "Successfully fetched all posts",
        data: [
            {id: 1, title: "First Post"},
            {id: 2, title: "Learning Modular Routing"}
        ]
    });
});

module.exports = router;
