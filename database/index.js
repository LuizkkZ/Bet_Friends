const CreateAposta = require('./models/createAposta')
const Sequelize = require('sequelize');
const configDB = require('./config/config.js');
const User = require('./models/user');
const connection = new Sequelize(configDB)

User.init(connection);
CreateAposta.init(connection);

module.exports = connection;