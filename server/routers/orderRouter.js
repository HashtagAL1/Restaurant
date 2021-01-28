const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { isDeliverer, isAdminOrDeliverer, isLoggedIn, isUser, isModerator } = require('../services/authService')
require('../config/dbConfig');
const Order = mongoose.model('Order');

router.post('/add', isUser, (req, res) => {
    const newOrder = req.body;
    Order.create(newOrder)
        .then((no) => {
            return res.status(200).json({
                success: true,
                message: 'Order taken',
                order: no
            });
        });
});

router.post('/update/:orderId', isDeliverer, (req, res) => {
    const orderId = req.params.orderId;
    const {status, deliverer} = req.body;
    Order.updateOne({_id: orderId}, { $set: {status: status, deliverer: deliverer}})
        .then((updatedOrder) => {
            return res.status(200).json({
                success: true,
                message: 'Order updated successfully'
            });
        })
        .catch((err) => {
            return res.status(200).json({
                success: false,
                message: 'Invalid data'
            });
        });
});

router.get('/allOrders', isAdminOrDeliverer, (req, res) => {

    Order.find({})
        .then((orders) => {
            return res.status(200).json({
                success: true,
                message: 'Orders fetched',
                orders: orders
            });
        });
});

router.get('/status/:status', isDeliverer, (req, res) => {
    const status = req.params.status;
    Order.find({status: status})
        .then((orders) => {
            return res.status(200).json({
                success: true,
                message: 'Orders fetched',
                orders: orders
            });
        });
});

router.get('/myOrders/:username', isUser, (req, res) => {
    const username = req.params.username;
    Order.find({username: username})
        .then((orders) => {
            return res.status(200).json({
                success: true,
                message: 'Orders fetched',
                orders: orders
            });
        })
        .catch((err) => {
            return res.status(200).json({
                success: false,
                message: 'Invalid data'
            });
        });
});

router.get('/orderDetails/:orderId', isUser, isAdminOrDeliverer, (req, res) => {
    const orderId = req.params.orderId;
    Order.findOne({_id: orderId})
        .then((order) => {
            if (order === null) {
                return res.status(200).json({
                    success: false,
                    message: 'Invalid data'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Order fetched',
                order: order
            });
        });
});

module.exports = router;