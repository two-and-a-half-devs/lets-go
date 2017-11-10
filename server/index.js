const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./database/index.js');
const request = require('request');
const api = require('../apikeys.js');

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
    headers: {
      authorization: `bearer ${api.yelp}`
    }
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
    headers: {
      authorization: `bearer ${api.yelp}`
    }
  };

  request(options, (error, response, body) => {
    if (err) throw err;
    res.send(body);
  });

});

app.post('/movies', (req, res) => {
  const zip = req.body.zipcode;
  let city;
  let cityid;
  let movieid;
  let cinemaid;
  let showtime;
  const currentTime = parseInt(new Date().toString().slice(16, 21).replace(/:/g,''));
  const result = {};

  request(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}&sensor=true`, (error, response, body) => {
    city = body.results[0].address_components[1].long_name;
  });

  request({ url: `https://api.internationalshowtimes.com/v4/cities?query=${city}`, headers: { authorization: api.movies }}, (error, response, body) => {
    cityid = parseInt(body.cities[0].id);
  });

  request({ url: `https://api.internationalshowtimes.com/v4/showtimes?city_ids=${cityid}&time_`, headers: { authorization: api.movies }}, (error, response, body) => {
    const movie = body.showtimes[Math.floor(Math.random()*body.showtimes.length)];
    movieid = ??????
    cinemaid = ?????
    showtime = ?????
  });

  request({ url: `https://api.internationalshowtimes.com/v4/movies/${movieid}`, headers: { authorization: api.movies }}, (error, response, body) => {
    result.movieName = body.movie.title;
    result.moviePoster = body.movie.poster_image.image_files[-1].url;
  });

  request({ url: `https://api.internationalshowtimes.com/v4/cinemas/${cinemaid}`, headers: { authorization: api.movies }}, (error, response, body) => {
    result.cinemaName = body.cinema.name;
  });

  res.send(result);

});

app.post('/entertainment', (req, res) => {
  const zip = req.body.zipcode;

  const options = {
    url: `https://api.yelp.com/v3/businesses/search?term=food&location=${zip}&limit=50&open_now=true`,
    headers: {
      authorization: `bearer ${api.event}`
    }
  };

  request(options, (error, response, body) => {
    if (err) throw err;
    res.send(body);
  });
});

app.post('/random', (req, res) => {

});

app.get('/', (req, res) => {

});

const port = 6969;
app.listen(port, function () {
  console.log(`Server Starts on ${port}`);
});
