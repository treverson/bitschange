/* eslint-disable no-unused-vars, no-console */
const dotenv = require('dotenv').config({
  path: 'env.env',
});

const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_DATABASE,
  },
});

knex('users').then(res => console.log('knex res', res)).catch(err => console.log('knex err:', err));

const db = {};

module.exports = db;
