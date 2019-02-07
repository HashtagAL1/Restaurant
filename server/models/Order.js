const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    meals: [mongoose.SchemaTypes.Object],
    totalPrice: {type: Number, required: true},
    date: {type: mongoose.SchemaTypes.Date},
    location: {type: String, required: true},
    customerID: {type: String, required: true},
    address: {type: String, required: true},
    deliverer: {type: String, default: ''},
    status: {type: String, default: 'In Progress'}
});

module.exports = mongoose.model('Order', orderSchema);