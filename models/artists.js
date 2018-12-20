// get connection to db
var db = require('../db');
var ObjectID = require('mongodb').ObjectID;

// method for get all
exports.all = function (callback) {
    db.get().collection('artists').find().toArray(function (err, docs) {
        callback(err, docs);
    });
};

exports.findById = function (id, callback) {
    db.get().collection('artists').findOne({ _id: ObjectID(id)}, function (err, doc) {
        callback(err, doc);
    })
};

exports.create = function (artist, callback) {
    db.get().collection('artists').insert(artist, function (err, result) {
        callback(err, result);
    });
};

exports.update = function (id, newData, callback) {
    db.get().collection('artists').updateOne(
        { _id: ObjectID(id) },
        newData,
        function (err, result) {
            callback(err, result);
        }
    )
};

exports.delete = function (id, callback) {
    db.get().collection('artists').deleteOne(
        { _id: ObjectID(id) },
        function (err, result) {
            callback(err, result);
        }
    )
} ;

