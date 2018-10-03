const express = require('express');
var app = express();
app.get('/', (req, res) => {
    res.send('Hello World Express');
});


app.get('/login', (req, res) => {
    res.send('Login please');
});

app.listen(3000, () => {
    console.log('Connect Listen 3000');
});

