const mongoose = require('mongoose');
const connectionString = `mongodb://localhost:27017/restaurantDB`;
require('../models/User');
require('../models/Meal');
require('../models/Order');

module.exports = mongoose.connect(connectionString)
    .then(() => {
    console.log('Database ready for use.');
});