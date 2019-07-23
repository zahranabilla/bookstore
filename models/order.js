const Sequelize = require('sequelize');

// import db config
const sequelize = require('../config/db');

// create class
class Order extends Sequelize.Model {}

// defines table in db
Order.init({
    status: {
        type: Sequelize.ENUM,
        values: ['0', '1'],
        allowNull: false
    }
},{sequelize, modelName: 'order'})

module.exports = Order;