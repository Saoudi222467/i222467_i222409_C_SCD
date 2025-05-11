const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

// Serve all static files from src directory
app.use(express.static(path.join(__dirname, 'src')));

// Handle all routes to serve index.html for SPA
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'src', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
}); 