var express = require('express');
var uid = require('uid-safe');
const config = require('../../knexfile.js');

var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
    var strUid = uid.sync(18);
    res.json({ guid: strUid });
});

module.exports = router;