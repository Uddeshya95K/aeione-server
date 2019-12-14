var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var chokidar = require('chokidar');

var app = express();
var router = express.Router();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});


app.use('/api', router);

require('./routes/routes')(router);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

var watcher = chokidar.watch('file or dir', { ignored: /^\./, persistent: true });

watcher
    .on('add', function(path) { console.log('File', 'request_data/', 'has been added'); })
    .on('change', function(path) { console.log('File', 'request_data/', 'has been changed'); })
    .on('unlink', function(path) { console.log('File', 'request_data/', 'has been removed'); })
    .on('error', function(error) { console.error('Error happened', error); })

module.exports = app;