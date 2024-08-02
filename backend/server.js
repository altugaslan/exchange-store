const express = require('express');
const cors = require('cors');
const axios = require('axios');
const dotenv = require('dotenv');
const { v4: uuidv4 } = require('uuid'); // uuid modülünü buraya ekledik

dotenv.config();

const app = express();

app.use(cors({
    origin: 'http://localhost:3000'
}));

app.use(express.json());

app.post('/api/initialize_user', async (req, res) => {
    const idempotencyKey = req.body.idempotencyKey || uuidv4();

    const options = {
        method: "POST",
        url: "https://api.circle.com/v1/w3s/user/initialize",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_EXCHANGE_API_KEY}`,
            "X-User-Token": `${process.env.REACT_APP_EXCHANGE_USER_TOKEN}`,
        },
        data: { idempotencyKey: idempotencyKey, blockchains: ["MATIC-AMOY"] }, 
    };

    try {
        const response = await axios.request(options);
        res.status(200).json({ challengeId: response.data.data.challengeId });
    } catch (error) {
        console.error('Error in API request: ', error.response?.data || error.message);
        res.status(500).json({ error: 'An error occurred', details: error.response?.data || error.message });
    }
});

const PORT = process.env.PORT || 5000; 
app.listen(PORT, '127.0.0.1', () => console.log(`Server running on port ${PORT}`));
