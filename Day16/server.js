// Import modules
const express = require('express');
const loggerMiddleware = require('./middlewares/loggerMiddleware');
const apiRoutes = require('./routes/api');

const app = express();
const PORT = 3000;

// Apply middleware...
app.use(express.json());
app.use(loggerMiddleware);

// Mount routes...
app.use('/api', apiRoutes);

// Error Handling...
app.use((err, req, res, next) => {
    console.error(err.message); // Changed console.log to console.error for clarity
    res.status(500).send({ error: 'Internal Server Error' });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
