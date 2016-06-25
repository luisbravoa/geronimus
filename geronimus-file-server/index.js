var express = require('express');
var app = express();
var bodyParser = require('body-parser');

var file = require('./src/file');

app.use(bodyParser.json());
app.use(express.static('public'));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/ls', function (req, res) {
    var path = req.query.path;
    file.ls(path)
        .then(function (data) {
            res.send(data);
        })
        .catch(function (e) {
            console.log(e);
            res.status(400).end();
        });
});

app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});