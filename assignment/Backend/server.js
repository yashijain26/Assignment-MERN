const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // For accessing environment variables
const captureRoutes = require('./routes/captureRoutes'); // Importing the routes
const app = express();
const PORT = process.env.PORT || 5000;
// Middleware
app.use(express.json());
app.use(cors());
// MongoDB connection
mongoose.connect(process.env.MONGO_URI, {
   useNewUrlParser: true,
   useUnifiedTopology: true,
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.log('MongoDB connection error:', err));
// Routes
app.use('/api/maps', captureRoutes);
// Start the server
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});


