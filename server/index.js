const express = require('express');
const path = require('path');
const port = 5000;
const app = express();
const db_connection = require('./db/index.js')

app.use(express.static(__dirname + '/../bitschange-client/build'))

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
});

db_connection.connect();

db_connection.end();

// app.post('/login', )