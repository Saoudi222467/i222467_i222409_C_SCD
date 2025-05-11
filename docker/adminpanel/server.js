const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3003;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files (frontend)
app.use(express.static(path.join(__dirname, 'frontend')));

// Basic API Routes
const apiRouter = express.Router();

// Example API endpoints
apiRouter.get('/health', (req, res) => {
    res.json({ status: 'ok', message: 'Admin API is running' });
});

// Add more API routes here as needed
apiRouter.get('/trips', (req, res) => {
    // Placeholder for trips endpoint
    res.json({ message: 'Trips endpoint' });
});

apiRouter.get('/blogs', (req, res) => {
    // Placeholder for blogs endpoint
    res.json({ message: 'Blogs endpoint' });
});

// Mount API routes
app.use('/api', apiRouter);

// Handle all frontend routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'admin-dashboard.html'));
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ error: 'Something went wrong!' });
});

app.listen(port, () => {
    console.log(`Admin Panel running on port ${port}`);
    console.log(`Frontend available at http://localhost:${port}`);
    console.log(`API available at http://localhost:${port}/api`);
}); 