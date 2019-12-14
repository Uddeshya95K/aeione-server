const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);
const fs = require('fs');

module.exports = function(router) {
    router.post('/postcustomer', function(req, res) {
        let time_stamp = Date.now();
        let dataset = req.body;
        let path = '../request_data/' + time_stamp + '.json';

        fs.writeFile(path, lyrics, (err) => {
            // throws an error, you could also catch it here
            if (err) throw err;

            // success case, the file was saved
            console.log('Lyric saved!');
        });
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