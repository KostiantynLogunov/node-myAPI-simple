var express = require('express');
var bodyParser =require('body-parser');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var db = require('./db');
var ArtistsController = require('./controllers/artists');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', function (req,res) {
    res.send('Hello API');
});

app.get('/artists', ArtistsController.all);

app.get('/artists/:id', ArtistsController.findById);

app.post('/artists', ArtistsController.create);

app.put('/artists/:id', ArtistsController.update);

app.delete('/artists/:id', ArtistsController.delete);

// так зроблено щоб не щапускати сервер якщо немає зєднання з БД
db.connect('mongodb://127.0.0.1:27017/myapi', function (err) {
   if (err){
       return console.log(err);
   }
   app.listen(3013, function () {
       console.log('API server started on port 3013');
   });
});

