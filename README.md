# Let's Go
If you're ready for a night out and undecided on where to go, use Let's Go! We take
the decision out of your hands and supply you with an adventure in your zip code.

## Overview
Let's Go is a simple web-app that utilizes iShowtimes API, Eventbrite API,
and the popular Yelp API to recommend an adventure within five categories: Food,
Entertainment, Movies, Active, and a random category that selects from one of the
four adventures previously mentioned.

To get started, download the project folder and run "npm install" followed by
"npm start" in your Terminal. This will run a local server hosted on port 3000.
Navigate to localhost:3000 and see the web app working. To get a recommendation,
enter a zip code and then select a type of adventure by clicking on one of the
buttons shown.

## Features for Future Releases
* **Random Event Implementation**: At the moment, random searches only food. However,
the goal of this is to randomly select one of the four categories and then propose an
event.
* **User Stored Information**: User login with Firebase authentication and storing
user adventures with a favorites mark.
* **Online Deployment**: Push the web app to Heroku or AWS for different client use.
* **Lets Go Then**: A feature of the web app to plan ahead and get an event in the future.

### Tool Stack
* [React](https://reactjs.org/)
* [Node](https://nodejs.org/en/)
* [Express](http://expressjs.com/)
* [Axios](https://github.com/axios/axios)
* [JQuery](http://api.jquery.com/)
* [Request](https://github.com/request/request)
* [MySQL](https://www.mysql.com/) PostGRES and Sequelize as Object-Relational Mapper (ORM)


### Folder Configuration (Front-End: Client, Back-End: Server)
```
lets-go
├── client
│   └── dist
│   |   ├── bundle.js
│   |   ├── index.html
│   |   ├── style.css
│   |   └── images
│   |       ├── ferris-wheel.png
│   |       ├── food.png
│   |       ├── help-round-button.png
│   |       ├── hiking.png
│   |       └── video-camera.png
|   |
│   └── src
│       ├── index.jsx
|       |
│       └── components
│           ├── App.jsx
│           ├── AdventureList.jsx
│           ├── AdvActive
│           |   ├── AdvActive.jsx
│           |   ├── brendan.gif
│           |   └── hiking.png
|           |
│           ├── AdvEntertainment
│           |   ├── AdvEntertainment.jsx
│           |   ├── brendan.gif
│           |   └── ferris-wheel.png
|           |
│           ├── AdvFood
│           |   ├── AdvFood.jsx
│           |   ├── brendan.gif
│           |   └── food.png
|           |
│           ├── AdvMovies
│           |   ├── AdvMovies.jsx
│           |   ├── brendan.gif
│           |   └── video-camera.png
|           |
│           └── AdvRandom
│               ├── AdvRandom.jsx
│               ├── brendan.gif
│               └── help-round-button.png
|
├── server
|   ├── controller
│   |   └── controller.js
│   |
|   ├── database
│   |   ├── controllers
│   |   |   └── controller.js
|   |   |
│   |   ├── models
│   |   |   └── models.js
|   |   |
│   |   └── index.js
|   |
|   ├── router
│   |   └── routes.js
|   |
|   └── index.js
│
├── webpack.config.js
├── README.md
├── package.json
├── db.config.js (NOT PROVIDED: PostGRES, ElephantSQL)
└── apikeys.js (NOT PROVIDED: Yelp, Eventbrite, Showtimes)
```
#### Server
The server is built using Node.js and Express.

#### Database
User login and stored information was advanced content for this project. Because authentication did not
work given the timeframe, storing database information was not implemented.

### The Developers
* [Jake Perez](https://github.com/jacobaperez)
* [Brendan Viloria](https://github.com/hbvbot)
* [Adrian Meza](https://github.com/adrianme213)
