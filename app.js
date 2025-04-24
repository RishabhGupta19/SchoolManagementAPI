const express = require('express');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

const app = express();
const schoolRoutes = require('./routes/schoolRoutes');

// Enable CORS for your frontend domain
app.use(cors({
  origin: 'https://schoolmanagementapi-u0eg.onrender.com',
  methods: ['GET', 'POST'],
  credentials: true,
}));
app.use(express.urlencoded({extended: false}));

// Middleware
app.use(express.json());

// Serve HTML files
app.get('/addSchool', (req, res) => {
  res.sendFile(path.join(__dirname, 'addSchool.html'));
});

app.get('/listSchools', (req, res) => {
  res.sendFile(path.join(__dirname, 'listSchools.html'));
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'home.html'));
});

// API routes
app.use('/', schoolRoutes);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
