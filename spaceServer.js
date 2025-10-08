const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
    res.type('text').send('Velkommen til NASA Sapce Mission API. Send POST request til /landing med pilot og planet data');
});

app.post('/landing', (req, res) => {
    const { pilot, planet } = req.body;
    if (!pilot || !planet) {
        return res.status(400).json({
            error: 'Manglende data',
        message: 'Send venligst både pilot og planet i JSON format'
     });
    }

    const message = `Pilot ${pilot} landede sikkert på ${planet}.`;

    res.status(200).json({
        success: true,
        message: message,
        mission: {
            pilot: pilot,
            planet: planet,
            status: 'Landet sikkert!'
        }
    });
});

app.get('/landing', (req, res) => {
    res.type('text').send('Dette endpoint kræver POST request med JSON data: { "pilot": "Navn", "planet": "PlanetNavn" }');
});

app.listen(port, () => console.log(`Space Mission API kører på http://localhost:${port}`));