const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

module.exports = function(router) {
    router.post('/postcustomer', function(req, res) {
        let dataset = req.body;
        return knex('user').insert(dataset)
            .then(() => console.log("data inserted"))
            .catch((err) => { console.log(err); throw err });
    });

    router.get('/getcustomer', function(req, res) {
        return knex.from('user').select("*")
            .then((rows) => {
                for (row of rows) {
                    console.log(`${row['id']} ${row['name']} ${row['price']}`);
                }
            }).catch((err) => { console.log(err); throw err })
            .finally(() => {
                knex.destroy();
            });
    });
}