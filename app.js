const express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.send('Hello World Express');
});

app.get('/dynamic', function(req, res) {
    var output = `
    <!DOCTYPE html>
    <html>
        <head>
            <meta charset="utf-8">
            <title></title>        
        </head>
        <body>
            Hello Static
        </body>
    </html>    
    `
    res.send(output);
});

app.get('/login', (req, res) => {
    res.send('Login please');
});

app.listen(3000, () => {
    console.log('Connect Listen 3000');
});

