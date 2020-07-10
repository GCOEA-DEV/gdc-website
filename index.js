const express = require('express');
const cors = require('cors');
const app = express();
const DB = require('./db/db');
const PORT = process.env.PORT || 8000

// Use cors
app.use(cors());

app.get('/api/developers', (req, res) => {
  res.status(200).json(DB.developers);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));
