const express = require('express');
const path = require('path');
const app = express();
const schoolRoutes = require('./routes/schoolRoutes');
require('dotenv').config();

app.use(express.json());

// Serve the HTML form at GET /addSchool
app.get('/addSchool', (req, res) => {
  res.sendFile(path.join(__dirname,  'addSchool.html'));
});
app.get('/listSchools', (req, res) => {
    res.sendFile(path.join(__dirname,  'listSchools.html'));
  });
  

app.use('/', schoolRoutes); // Keep the POST /addSchool logic here

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
