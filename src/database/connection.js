const environment = process.env.NODE_ENV || 'development';
const configuration = require('../../knewfile')[environment];
console.log(configuration);

const connection = require('knex')(configuration);
module.exports = connection;