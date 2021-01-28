const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { isAdmin } = require('../services/authService');
require('../config/dbConfig');
const User = mongoose.model('User');

router.post('/update/:userId', isAdmin, (req, res) => {
    const userId = req.params.userId;
    const {role} = req.body;
    User.updateOne({_id: userId}, { $set: {role: role}})
        .then((updatedUser) => {
            return res.status(200).json({
                success: true,
                message: 'User updated'
            });
        })
        .catch((err) => {
            return res.status(200).json({
                success: false,
                message: 'Invalid data'
            });
        });
});

router.get('/all', isAdmin, (req, res) => {
    User.find({})
        .then((users) => {
            return res.status(200).json({
                success: true,
                message: 'Users fetched',
                users: users
            });
        });
});

module.exports = router;