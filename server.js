var express = require('express');
var app = express();

app.get('/', function (req,res) {
    res.send('Hello API');
});

app.listen(3013, function () {
    console.log('API server started on port 3013');
});