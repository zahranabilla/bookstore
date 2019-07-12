const Sequelize = require('sequelize');

// import db config
const sequelize = require('../config/db');

// create class
class Book extends Sequelize.Model {}

// defines table in db
Book.init({
    title: {
        type : Sequelize.STRING,
        allowNull : false
    },
    cat: {
        type: Sequelize.ENUM,
        values: ['Science', 'Biography', 'Computer', 'Magazine', 'Computer']
    },
    price: {
        type: Sequelize.INTEGER
    }
}, {sequelize, modelName: 'book'})

module.exports = Book;