var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var chokidar = require('chokidar');
var fs = require('fs');


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

const watcher = chokidar.watch('request_data/').on('all', (event, path) => {
    console.log(event, path);
});

// const log = console.log.bind(console);
watcher
    .on('add', path => {
        fileChanged(path)
    });

function fileChanged(path) {
    fs.readFile(path, 'utf8', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            var target = data
            knex('user').insert(target)
                .then(() => {
                    return res.json({ status: '200', msg: 'successfully inserted' })
                })
                .catch((err) => {
                    console.log(err);
                    return res.json({ status: '500', msg: 'something went wrong' })
                });
            // console.log(target);
            // console.log('***target***', typeof target, target)
            // console.log('***path***', path)
        }
    })
}

module.exports = app;