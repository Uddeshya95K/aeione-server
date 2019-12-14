// const config = require('../knexfile.js');
// const env = 'development';
// const knex = require('knex')(config[env]);

module.exports = function(router) {
    router.get('/', function(req, res, next) {
        return "test";
    })
    router.get('/get_customer_data', function(req, res) {
        return knex('user')
            .orderBy('date_time')
            .then(function(result) {
                if (result.length <= 0) {
                    return result;
                }
            });
    });

}

/* GET customer listing. */


/* adds a new customer to the list */
// router.post('/post_customer_data', function(req, res) {
//             // const body = req.body;

//             //path to read from the folder
//             // once you get all the data 
//             // get id of that data

//             // return knex('user').count().where()
//             //     .then(function(result) {
//             //         if (result.length <= 0) {
// return knex('user').insert(data)
//     .then(function(res) {
//         if (res.length <= 0) {
//             return res;
//         }
//     });
//             //         }
//             //     });
//         }

//npm