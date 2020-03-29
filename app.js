var express = require('express');
var mysql = require('mysql');

var app = express();



app.get('/recipes', function (req, res) {
    connection.connect();

    connection.query('SELECT * FROM `recipes`', function (err, rows, fields) {
        if (err) {throw err};
        connection.end();
        res.send(JSON.stringify(rows));
    });
});
app.listen(9000, function () {
    console.log('Cookbook API listening on port 9000!');
});