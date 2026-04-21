require('dotenv').config(); // Load variables
const express = require('express');
const mongoose = require('mongoose'); // Moved up with other imports
const mainRouter = require('./routes');

const app = express();
const PORT = 3000;

// DIAGNOSTIC LOG: This will tell us if the file is being read
console.log("DEBUG: MONGODB_URI value is:", process.env.MONGODB_URI);

app.use(express.json());
app.use('/api/v1', mainRouter);

// Database Connection
if (!process.env.MONGODB_URI) {
    console.error("FATAL ERROR: MONGODB_URI is not defined in .env file");
    process.exit(1); // Stop the server if the URI is missing
}

mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to MongoDB Atlas'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});