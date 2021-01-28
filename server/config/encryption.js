const crypto = require('crypto');
const config = require('./config');

module.exports = {
    generateSalt: () => crypto.randomBytes(128).toString('base64'),
    generateHashedPassword: (salt, password) =>
        crypto.createHmac('sha256', salt).update(password).digest('hex'),
    secret: config.secret
};