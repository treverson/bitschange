const express = require('express');
const path = require('path');
const db = require('./db/index.js');
const bodyParser = require('body-parser');
const cors = require('cors');
const bcrypt = require('bcrypt');

const port = 5000;
const app = express();

app.use(express.static(path.join(__dirname, '/../bitschange-client/build')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors({ origin: 'http://localhost:3000' }));

app.listen(port, () => {
  console.log(`\nServer running on port ${port}\n`); // eslint-disable-line
});

// this could be used to save the hash in the db
// bcrypt.hash(req_password, saltRounds).then(hash => db.setHash(req_username,hash)).catch(err => console.log(err));
// const saltRounds = 10;

app.post('/login', (req, res) => {
  const reqUsername = req.body.username;
  const reqPassword = req.body.password;
  db.fetchHash(reqUsername)
    .then(dbRes => bcrypt.compare(reqPassword, dbRes[0].PassHash))
    .then((doesMatch) => {
      if (doesMatch) {
        res.send('youre in!');
      }
    })
    .catch(err => res.send(err));
});
