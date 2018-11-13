const express = require('express');
const path = require('path');
const app = express();
const port = process.env.PORT || 3000;

app.set('views', './views');

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/first', (req, res) => {
    res.redirect('/second');
});

app.get('/second', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/second.html'));
});

// app.get('/favicon.ico', (req, res) => res.status(204));

app.listen(port, () => console.log(`Example app listening on port ${port}!`))