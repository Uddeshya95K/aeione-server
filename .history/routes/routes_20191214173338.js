// const config = require('../knexfile.js');
// const env = 'development';
// const knex = require('knex')(config[env]);

module.exports = function(router) {
    console.log("test")
    router.get('/customer', function(req, res) {
        console.log("test")
        res.json({ msg: "test" });
    })
}