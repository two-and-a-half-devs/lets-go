const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const api = require('../apikeys.js');
const router = require('./router/routes.js')

/* ------------------ SERVER  ------------------ */
let app = express();
app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));
app.use('/', router)
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

let port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Port is ${port}`);
});
