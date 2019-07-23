const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./config/db')

const app = express();

// Setting template engine
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static path
app.use(express.static(path.join(__dirname, 'public')));

// Import models
const Book = require('./models/book')
const OrderItem = require('./models/order_item')
const Order = require('./models/order')
const User = require('./models/user')

// associations
Order.hasMany(OrderItem, {as: 'Items'})
User.hasMany(Order, {as: 'Bills'})
Book.hasMany(OrderItem, {as: 'Details'})

// Import routes
const homeRoute = require('./routes/home');
const bookRoute = require('./routes/book')

// Defines routes
app.use('/', homeRoute);
app.use('/book', bookRoute)

// Listen port
app.listen(3000, () => {
    console.log('server is up')
    sequelize.sync();
    
})