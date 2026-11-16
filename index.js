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

        if (!mesage || !Array.isArray(mesage)) {
            return res.status(400).json({ error: 'Message is required' });
        }
    }
});

const response = await fetch("https://openrouter.ai/api/v1/chat/completions", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${process.env.OPENROUTER_API_KEY}`,
    },
    body: JSON.stringify({
        model: "gpt-4o-mini",
        messages: mesage,
    }),
});