const sequelize = require('../index');
const Sequelize = require('sequelize');

/* ------------- USER TABLE ------------------ */
const Users = sequelize.define('users', {
  username: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  },
  unique_identifier: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true
  }
})

/* ---------------- ADVENTURE TABLE ------------------ */
const Adventures = sequelize.define('adventures', {
  adventure: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  unique_identifier: {
    type: Sequelize.STRING,
    allowNull: false,
  },
})
