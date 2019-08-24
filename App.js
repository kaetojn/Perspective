const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose');

//var user = require(user.js)
const results = require('./routes/api/results')

const app = express();

//var form = require('form');
//var results = require('results');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}))

const db = require('./conf/key').mongoURI;

mongoose.connect(db)
    .then(() => console.log("Success: Yes"))
    .catch(error => console.log('Error:', error));


app.use('/api/results', results);

const port = process.env.PORT || 5000

app.listen(port, () => console.error(`Server started on port ${port}`));


module.exports = app;
    