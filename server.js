var express = require('express');
var bodyParser =require('body-parser');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// додамо роут який буде повертати список виконавців
var artists =[
    {
        id: 1,
        name: 'Metalica'
    },
    {
        id: 2,
        name: 'Iron Maiden'
    },
    {
        id: 3,
        name: 'Deep purpule'
    },
];

app.get('/', function (req,res) {
    res.send('Hello API');
});

app.get('/artists', function (req,res) {
    res.send(artists);
});

app.get('/artists/:id', function (req,res) {
    var artist = artists.find(function (artist) {
        return artist.id === +req.params.id;
    });
    res.send(artist);
});

app.post('/artists', function (req, res) {
    var artist = {
        id: Date.now(),
        name: req.body.name
    };
    artists.push(artist);
    console.log(req.body);
    res.send(artist);
});

app.put('/artists/:id', function (req, res) {
    var artist = artists.find(function (artist) {
        return artist.id === +req.params.id;
    });
    artist.name = req.body.name;
    res.sendStatus(200);
});

app.delete('/artists/:id', function (req, res) {

    artists = artists.filter(function (artist) {
        return artist.id !== Number(req.params.id);
    });
    res.sendStatus(200);
});

app.listen(3013, function () {
    console.log('API server started on port 3013');
});