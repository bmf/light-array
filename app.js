var express = require('express');
var app = express();

app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

app.use(express.static('js'));
app.use(express.static('css'));

app.listen(3000);
