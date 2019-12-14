// const config = require('../knexfile.js');
// const env = 'development';
// const knex = require('knex')(config[env]);

module.exports = function(router) {
    // return knex('user').insert(data)
    //     .then(function(res) {
    //         if (res.length <= 0) {
    //             return res;
    //         }
    //     });
    // console.log("test")
    router.get('/customer', function(req, res) {
        console.log(req.body);
        // res.json({ msg: "test" });
    })
}