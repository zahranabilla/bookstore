const Sequelize = require('sequelize')

const sequelize = require('../config/db')

class User extends Sequelize.Model{}

User.init({
    username : Sequelize.STRING,
    password : Sequelize.STRING,
    role : {
        type : Sequelize.ENUM,
        values : ['admin', 'user']
    }
}, {sequelize, modelName: 'user'})

module.exports = User