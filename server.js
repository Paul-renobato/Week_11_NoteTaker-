const express = require('express');
const path = require('path');
const fs = require("fs");
const app = express();
const PORT = 3000;

app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'public/notes.html')));


app.listen(PORT, () => {
    console.log(`listening on: http://localhost:${PORT}`);
})