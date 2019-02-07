const mongoose = require('mongoose');
const mealSchema = new mongoose.Schema({
    name: {type: String, required: true},
    price: {type: Number, required: true},
    imageUrl: {type: String, required: true},
    category: {type: String, required: true},
    ingredients: [String]
});

module.exports = mongoose.model('Meal', mealSchema);