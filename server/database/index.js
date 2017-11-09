const Sequelize = require('sequelize');
const database = require('../../db.config.js');

/* ------------------ DATABASE CONNECTION  ------------------ */
const sequelize = new Sequelize(`postgres://${database.name}:${database.pass}${database.server}/${database.name}`);

sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database!"))
  .catch( err => console.log("Error connecting to database:", err))

module.exports = sequelize;
