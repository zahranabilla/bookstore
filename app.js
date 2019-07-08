const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Setting template engine
app.set('view engine', 'ejs');

// Body Parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// Static path
app.use(express.static(path.join(__dirname, 'public')));

// Import routes
const homeRoute = require('./routes/home');

// Defines routes
app.use('/', homeRoute);

// Listen port
app.listen(3000, () => {
    console.log('server is up')
})