var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser')
const chokidar = require('chokidar');

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

const watcher = chokidar.watch('file, dir, glob, or array', {
    ignored: /(^|[\/\\])\../, // ignore dotfiles
    persistent: true
});

const log = console.log.bind(console);

module.exports = app;