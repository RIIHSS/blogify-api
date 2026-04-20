const express = require('express');
const app = express();
const mainRouter = require('./routes');

const PORT = 3000

app.use(express.json());

app.use('/api/v1', mainRouter);

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});