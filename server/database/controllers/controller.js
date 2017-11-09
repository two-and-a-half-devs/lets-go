const sequelize = require('../index');
const models = require('../models/models');

const addUser = function(userName, psw, emailAddress, uniqueTag, res = null) {
  sequelize.models.users.create({
    username: userName,
    password: psw,
    email: emailAddress,
    unique_identifier: uniqueTag

  })
  .then(() => {
    if (res) res.status(200);
    console.log('Successfully input new user into database')
  })
  .catch(err => console.log("Error inputing user into database:", err))
}

const getUsers = function(res = null) {
  sequelize.models.users.findAll({
    where: {}
  })
  .then(results => {
    if (res) res.status(200).json(results);
    console.log('Successfully got users from database');
  })
  .catch(err => {
    res.status(404);
    console.log('Error getting users from database:', err)
  })
}

const addAdventure = function(adventureName, uniqueTag, res = null) {
  sequelize.models.adventures.create({
    adventure: adventureName,
    unique_identifier: uniqueTag
  })
  .then(() => {
    if (res) res.status(200);
    console.log('Successfully input adventure with uniqueTag into database')
  })
  .catch(err => console.log("Error inputing adventure into database:", err))
}

const getAdventuresFromUser = function(uniqueTag, res = null) {
  sequelize.models.adventures.findAll({
    where: { unique_identifier: uniqueTag }
  })
  .then(results => {
    if (res) res.status(200).json(results)
    console.log('Successfully retrieved adventures from database')
  })
  .catch(err => {
    res.status(404);
    console.log("Error retrieving adventures from database:", err)
  })
}


exports.addUser = addUser;
exports.getUsers = getUsers;
exports.addAdventure = addAdventure;
exports.getAdventuresFromUser = getAdventuresFromUser;
