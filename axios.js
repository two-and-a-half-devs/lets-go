axios({
  method: 'post',
  url: '/food',
  data: {
    zipcode:
  }
}).then(function(res) {
  const item = res.data.businesses[Math.floor(Math.random()*res.data.businesses.length)];
  //item.name, item.url, item.image_url,
  //item.address1, item.city, item.state,
  //item.zip_code
});

axios({
  method: 'post',
  url: '/active',
  data: {
    zipcode:
  }
}).then(function(res) {
  const item = res.data.businesses[Math.floor(Math.random()*res.data.businesses.length)];
  //item.name, item.url, item.image_url,
  //item.address1, item.city, item.state,
  //item.zip_code
});

axios({
  method: 'post',
  url: '/movies',
  data: {
    zipcode:
  }
}).then(function(res) {
  const item = res.data.movies[Math.floor(Math.random()*res.data.movies.length)];
  //item.name, item.poster_image_thumbnail
  //looks lame atm needs more shiz
});

axios({
  method: 'post',
  url: '/entertainment',
  data: {
    zipcode:
  }
}).then(function(res) {
  const item = res.data.events[Math.floor(Math.random()*res.data.events.length)];
  //item.logo.original.url, item.name.text,
  //item.url, item.start.local
  //convert start.local to readible thing
});

axios({
  method: 'post',
  url: '/random',
  data: {
    zipcode:
  }
}).then(function(res) {
  //check to see what category was chosen
  //then filter what's needed from data
});
