const axios = require('axios');
const express = require('express');
const app = express();
app.use(express.json());

const API_KEY = require('./keys');
const port = 3000;


app.get('/clima/:cidade', async (req, res) => {
    try {
        const { cidade } = req.query;
        let response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${API_KEY}&units=metric`);
        let clima = response.data;
        res.json(clima).status(200);
    } catch (error) {
        res.status(500).json({ error: 'Erro ao buscar dados climáticos' });
    }
});

app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

