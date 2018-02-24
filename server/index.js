const express = require('express');
const path = require('path');
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, '/../bitschange-client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => {
  console.log(`Server running on port ${port}`); // eslint-disable-line
});

app.post('/login', (req, res) => {
  console.log('req body of post to login:', req.body);
  res.end();
});
