// if not in production use dotenv
if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();

// Body Parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const apiRoutes = require('./api/routes/api');

// PORT config
const PORT = process.env.PORT || 8000;

// Use cors
app.use(cors());

app.use('/api', apiRoutes);

// Heroku Production Build
if (process.env.NODE_ENV === 'production') {
  // Static files
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../', 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, console.log(`Server started on port ${PORT}`));
