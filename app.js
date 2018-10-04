const express = require('express');
var app = express();
app.locals.pretty = true;
app.set('view engine', 'jade');
app.set('views', './views');
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

app.get('/templete', function(req, res){
    res.render('temp', {title:'이것슨', time:Date()});
});

app.listen(3000, () => {
    console.log('Connect Listen 3000');
});

