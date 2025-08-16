// server.js
import express from 'express';
import qr from 'qr-image';
import fs from 'fs';

const app = express();
app.use(express.json()); // To read JSON from requests
app.use(express.static('public')); // To serve your HTML file from /public folder

// Route to generate QR
app.post('/generate-qr', (req, res) => {
    const { url } = req.body;

    if (!url) return res.status(400).send('No URL provided');

    const qr_svg = qr.image(url);
    const filePath = './public/qr_code.png';
    qr_svg.pipe(fs.createWriteStream(filePath));

    res.json({ message: 'QR code generated', filePath });
});

app.listen(3000, () => {
    console.log('Server running at http://localhost:3000');
});
