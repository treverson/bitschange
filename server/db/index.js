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

const db = {};

// db.setHash = (username, hash) => knex('users').update({ PassHash: hash }).where({ username });

db.fetchHash = (username) => {
  return knex('users').select('PassHash').where({ username });
};

db.fetchBalances = (username) => {
  knex('users').select('username, USDBalance').where({ username });
};

module.exports = db;
