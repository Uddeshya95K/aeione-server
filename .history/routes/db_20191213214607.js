const config = require('../knexfile.js');
const env = 'development';
const knex = require('knex')(config[env]);

module.exports = knex;

knex.seed.run([config]);