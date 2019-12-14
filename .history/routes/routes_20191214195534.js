const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

module.exports = function(router) {
    router.post('/postcustomer', function(req, res) {
        let dataset = req.body;
        return knex('user').insert(dataset)
            .then(() => {
                return res.json({ status: '200', msg: 'successfully inserted' })
            })
            .catch((err) => {
                console.log(err);
                return res.json({ status: '500', msg: 'something went wrong' })
            });
    });

    router.get('/getcustomer', function(req, res) {
        return knex.from('user').select("*")
            .then((rows) => {
                // console.log(rows);
                return res.json(rows);
                // for (row of rows) {
                //     console.log(`${row['id']} ${row['first_name']} ${row['last_name']} ${row['email']} ${row['zipcode']} ${row['password']}`);
                // }
            }).catch((err) => {
                console.log(err);
                return res.json({ status: '500', msg: 'something went wrong' })
            });
    });
}