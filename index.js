const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile("/index.html");
    });

app.post('/api/data', (req, res) => {
    try {
        const mesage = req.body.message;
    }
});