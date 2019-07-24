const Sequelize = require('sequelize');

// defines which db to use
const sequelize = new Sequelize('3if1kelompok6', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql'
});

// exports configuration
module.exports = sequelize;