var express = require('express');
var uid = require('uid-safe');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    res.json({ users: [{ name: 'Timmy' }] });
});

module.exports = router;