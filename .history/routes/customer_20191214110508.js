// var express = require('express');
// var router = express.Router();
// var CustomerService = require('../services/service.customer');
const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

module.exports = function(router) {

        /* GET customer listing. */
        // router.get('/', async function(req, res, next) {
        //     res.json({ error: "Invalid Customer UID." });
        // });

        /* adds a new customer to the list */
        router.post('/v1/customer', function(req, res) {
                    // const body = req.body;

                    //path to read from the folder
                    // once you get all the data 
                    // get id of that data

                    return knex('user').count().where()
                        .then(function(result) {
                            if (result.length <= 0) {
                                return knex('user').insert(data)
                                    .then(function(res) {
                                        if (res.length <= 0) {
                                            return res;
                                        }
                                    });
                            }
                        });
                }

                // try {
                //     const customer = await CustomerService.create(body);

                //     if (body.guid != null) {
                //         customer.guid = body.guid;
                //     }

                //     res.cookie('guid', customer.guid, { maxAge: 900000, httpOnly: true });

                //     knex('user').insert(customer).then(() => console.log("data inserted"))
                //         .catch((err) => { console.log(err); throw err })
                //         .finally(() => {
                //             knex.destroy();
                //         });

                //     // created the customer! 
                //     return res.status(201).json({ customer: customer });
                // } catch (err) {
                //     if (err.name === 'ValidationError') {
                //         return res.status(400).json({ error: err.message });
                //     }

                //     // unexpected error
                //     return next(err);
                // }
                //});

                /* retrieves a customer by uid */
                // router.get('/:id', async(req, res, next) => {
                //     try {
                //         const customer = await CustomerService.retrieve(req.params.id);
                //         console.log(customer);

                //         return res.json({ customer: customer });
                //     } catch (err) {
                //         // unexpected error
                //         return next(err);
                //     }
                // });

                /* updates the customer by uid */
                // router.put('/:id', async(req, res, next) => {
                //     try {
                //         const customer = await CustomerService.update(req.params.id, req.body);

                //         return res.json({ customer: customer });
                //     } catch (err) {
                //         // unexpected error
                //         return next(err);
                //     }
                // });

                /* removes the customer from the customer list by uid */
                // router.delete('/:id', async(req, res, next) => {
                //     try {
                //         const customer = await CustomerService.delete(req.params.id);

                //         return res.json({ success: true });
                //     } catch (err) {
                //         // unexpected error
                //         return next(err);
                //     }
                // });

                // module.exports = router;