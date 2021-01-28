const mongoose = require('mongoose');
const config = require('./config')
require('../models/User');
require('../models/Meal');
require('../models/Order');

module.exports = mongoose.connect(config.connectionString, { useNewUrlParser: true })
    .then(() => {
    console.log('Database ready for use.');
});