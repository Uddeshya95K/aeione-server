const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);
const fs = require('fs');

module.exports = function(router) {
    router.post('/postcustomer', function(req, res) {
        let time_stamp = Date.now();
        let dataset = req.body;
        dataset['time_stamp'] = time_stamp;
        console.log(dataset);
        console.log(time_stamp);
        console.log(finalJson);
        // return knex('user').insert(dataset)
        //     .then(() => {
        //         return res.json({ status: '200', msg: 'successfully inserted' })
        //     })
        //     .catch((err) => {
        //         console.log(err);
        //         return res.json({ status: '500', msg: 'something went wrong' })
        //     });
    });

    router.get('/getcustomer', function(req, res) {
        return knex.from('user').select("*")
            .then((rows) => {
                return res.json(rows);
            }).catch((err) => {
                console.log(err);
                return res.json({ status: '500', msg: 'something went wrong' })
            });
    });
}