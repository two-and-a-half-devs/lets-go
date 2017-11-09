const Sequelize = require('sequelize');
const database = require('../../db.config.js');

/* ------------------ DATABASE CONNECTION  ------------------ */
const sequelize = new Sequelize(`postgres://${database.name}:${database.pass}${database.server}/${database.name}`);

sequelize
  .authenticate()
  .then(() => console.log("Successfully connected to database!"))
  .catch( err => console.log("Error connecting to database:", err))

module.exports = sequelize;
/* --------------- USERS TABLE ---------------------- */
// const Users = sequelize.define('users', {
//   username: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   password: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   email: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   },
//   unique_identifier: {
//     type: Sequelize.STRING,
//     allowNull: false,
//     unique: true
//   }
// })
//
// const Adventures = sequelize.define('adventures', {
//   adventure: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
//   unique_identifier: {
//     type: Sequelize.STRING,
//     allowNull: false,
//   },
// })

// TODO: Add foreign key from users to adventures for look ups of
// individual users adventures.
