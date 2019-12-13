var express = require('express');
var uid = require('uid-safe');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var strUid = uid.sync(18);
    res.json({ users: [{ name: 'Timmy' }] });
});

module.exports = router;