const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');
const db = require('./database/index.js');
const request = require('request');
const api = require('./apikeys.js');

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
app.post('/food', (req, res) => {
  const zip = req.body.zipcode;
  const options = {
    url: `https://api.yelp.com/v3/businesses/search?term=food&location=${zip}&limit=50&open_now=true`,
    authorization: `bearer ${api.yelp}`
  };
  request(options, (error, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.post('/active', (req, res) => {
  const zip = req.body.zipcode;
  const options = {
    url: `https://api.yelp.com/v3/businesses/search?term=food&location=${zip}&limit=50&open_now=true`,
    authorization: `bearer ${api.yelp}`
  };
  request(options, (error, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.post('/movies', (req, res) => {
 const zip = req.body.zipcode;
 let city;
 request(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}&sensor=true`, (error, response, body) => {
   body.results[0]
 });
});

app.post('/entertainment', (req, res) => {

});

app.post('/random', (req, res) => {

});

app.get('/', (req, res) => {

});

const port = 6969;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
