const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 9876;

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/average-calculator', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// Middleware
app.use(express.json());

// Routes
const numberRoutes = require('./routes/numbers');
app.use('/numbers', numberRoutes);

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});
