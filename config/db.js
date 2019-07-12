const Sequelize = require('sequelize');

// defines which db to use
const sequelize = new Sequelize('mysql://root:@localhost:3306/bacaatuh');

// exports configuration
module.exports = sequelize;