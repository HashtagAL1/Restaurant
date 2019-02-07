const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const encryption = require('../config/encryption');
const jwt = require('jsonwebtoken');
require('../config/dbConfig');
const User = mongoose.model('User');
const secret = 'kalamana';

router.post('/register', (req, res) => {
    const {username, password, email} = req.body;
    User.findOne({username: username})
        .then((user) => {
            if (user !== null) {
                return res.status(200).json({
                    success: false,
                    message: 'This username is already taken'
                });
            }
            let orders = [];
            let role = 'user';
            if (username === 'Hashtag') {
                role = 'admin';
            }

            const salt = encryption.generateSalt();
            const hashedPass = encryption.generateHashedPassword(salt, password);
            const newUser = {
                username, salt, hashedPass, email, orders, role
            };

            User.create(newUser)
                .then((nu) => {
                    const token = jwt.sign({username: username, userId: nu._id, role: role}, secret, {expiresIn: '3d'});
                    return res.status(200).json({
                        success: true,
                        message: 'Registration successful!',
                        access_token: token
                    });
                });
        });
});

router.post('/login', (req, res) => {
    const {username, password} = req.body;
    User.findOne({username: username})
        .then((user) => {
            const hashedPass = encryption.generateHashedPassword(user.salt, password);
            if (hashedPass !== user.hashedPass) {
                return res.status(401).json({
                    success: false,
                    message: 'Invalid credentials'
                });
            }
            const token = jwt.sign({username: username, userId: user._id, role: user.role}, secret, {expiresIn: '3d'});
            return res.status(200).json({
                success: true,
                message: 'Login successful',
                access_token: token
            });
        })
        .catch((err) => {
            return res.status(401).json({
                success: false,
                message: 'Invalid credentials'
            });
        });
});

module.exports = router;