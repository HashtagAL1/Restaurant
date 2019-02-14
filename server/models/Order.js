const mongoose = require('mongoose');
const orderSchema = new mongoose.Schema({
    cart: [mongoose.SchemaTypes.Object],
    totalPrice: {type: Number, required: true},
    date: {type: String, required: true},
    location: {type: String, default: ''},
    username: {type: String, required: true},
    address: {type: String, default: ''},
    customerName: {type: String, required: true},
    deliverer: {type: String, default: ''},
    status: {type: String, default: 'In Progress'}
});

module.exports = mongoose.model('Order', orderSchema);