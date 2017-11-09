const express = require('express');
const bodyParser = require('body-parser');
const db = require('./database/controllers/controller');

// not sure we need these.
const path = require('path');
const axios = require('axios');


/* ------------------ SERVER  ------------------ */
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser());
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

/* ------------------ ROUTE HANDLING  ------------------ */
app.post('/', (req, res) => {

});

app.get('/', (req, res) => {

});

const port = 6969;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
