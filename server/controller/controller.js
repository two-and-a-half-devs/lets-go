const bodyParser = require('body-parser');
const request = require('request');
const rp = require('request-promise');
const api = require('../../apikeys.js');

module.exports = {
  food: (req, res) => {
    const zip = req.body.zipcode;

    const options = {
      url: `https://api.yelp.com/v3/businesses/search?term=food&location=${zip}&limit=50&open_now=true`,
      headers: {
        authorization: api.yelp
      }
    };

    request(options, (err, response, body) => {
      if (err) throw err;
      res.send(body);
    });

  },

  active: (req, res) => {
    const zip = req.body.zipcode;

    const options = {
      url: `https://api.yelp.com/v3/businesses/search?term=hiking&location=${zip}&open_now=true`,
      headers: {
        authorization: api.yelp
      }
    };

    request(options, (err, response, body) => {
      if (err) throw err;
      res.send(body);
    });

  },

  movies: (req, res) => {
    const zip = req.body.zipcode;
    let city;
    let cityid;
    let movieid;
    let cinemaid;
    const result = {};

    rp(`http://maps.googleapis.com/maps/api/geocode/json?address=${zip}&sensor=true`).then((body => {
      const parsedBody = JSON.parse(body);
      city = parsedBody.results[0].address_components[1].long_name;
      city = city.split(' ').join('_');
    }))
    .then(() => {
      rp({ url: `https://api.internationalshowtimes.com/v4/cities?query=${city}`, headers: { authorization: api.movies }}).then((body => {
        const cityBody = JSON.parse(body);
        cityid = parseInt(cityBody['cities'][0].id);
      }))
      .then(() => {
        rp({ url: `https://api.internationalshowtimes.com/v4/showtimes?city_ids=${cityid}`, headers: { authorization: api.movies }}).then((body => {
          const movieBody = JSON.parse(body);
          const movie = movieBody.showtimes[Math.floor(Math.random() * (20) + 1)];
          movieid = movie.movie_id;
          cinemaid = movie.cinema_id;
        }))
        .then(() => {
          rp({ url: `https://api.internationalshowtimes.com/v4/movies/${movieid}`, headers: { authorization: api.movies }}).then((body => {
            const movieBody = JSON.parse(body);
            result.movieName = movieBody.movie.title;
            const imagesArray = movieBody.movie.poster_image.image_files;
            result.moviePoster = imagesArray[imagesArray.length - 1].url;
          }))
          .then(() => {
            rp({ url: `https://api.internationalshowtimes.com/v4/cinemas/${cinemaid}`, headers: { authorization: api.movies }}).then((body => {
              const cinemaBody = JSON.parse(body);
              result.cinemaName = cinemaBody.cinema.name;
              res.send(result);
            }))
          })
        })
      })
    })
  },

  entertainment: (req, res) => {
    const zip = req.body.zipcode;

    const options = {
      url: `https://www.eventbriteapi.com/v3/events/search?sort_by=date&location.address=${zip}&start_date.keyword=today`,
      headers: {
        authorization: api.event
      }
    };

    request(options, (err, response, body) => {
      if (err) throw err;
      res.send(body);
    });
  },

  random: (req, res) => {
    const randomNum = Math.floor(Math.random() * 4);
    if (randomNum === 0) {
      return this.food;
    } else if (randomNum === 1) {
      return this.active
    } else if (randomNum === 2) {
      return this.active
    } else if (randomNum === 3) {
      return this.active
    }
  }


}
