const mongoose = require('mongoose');
const userSchema = new mongoose.Schema({
    username: {type: String, required: true},
    salt: {type: String, required: true},
    hashedPass: {type: String, required: true},
    email: {type: String, required: true},
    orders: [mongoose.SchemaTypes.Object],
    role: {type: String, required: true}
});

module.exports = mongoose.model('User', userSchema);