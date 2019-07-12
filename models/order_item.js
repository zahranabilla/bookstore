const Sequelize = require('sequelize');

// import db config
const sequelize = require('../config/db');

// create class
class OrderItem extends Sequelize.Model {}

// defines table in db
OrderItem.init({
    qty: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
},{sequelize, modelName: 'order_item'})

module.exports = OrderItem;