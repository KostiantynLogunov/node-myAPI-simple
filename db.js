var MongoClient = require('mongodb').MongoClient;

var state = {
  db: null  
};

exports.connect = function (url, done) {
    if (state.db) {
        return done();
    }

    MongoClient.connect('mongodb://127.0.0.1:27017/myapi', function (err, db) {
        if (err) {
            return done(err);
        }
        state.db = db;
        done();
    });
};
exports.get = function () {
    return state.db;
} ;