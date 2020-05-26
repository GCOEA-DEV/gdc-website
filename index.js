const express = require('express');
const cors = require('cors'); 
const app = express();
const PORT = process.env.PORT || 8000

// Use cors
app.use(cors());

app.get('/api/developers', (req, res) => {
    const developers = [
        {
            id: 1,
            name: 'Pranjal Alone'
        },
        {
            id: 2,
            name: 'Vaibhav Butale'
        },
        {
            id: 3,
            name: 'Nilay Ingle'
        }
    ]
    res.json(developers);
});

app.listen(PORT, console.log(`Server started on port ${PORT}`));