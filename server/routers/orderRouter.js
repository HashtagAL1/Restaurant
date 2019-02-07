const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('../config/dbConfig');
const Order = mongoose.model('Order');

router.post('/add', (req, res) => {
    const newOrder = req.body;
    Order.create(newOrder)
        .then((no) => {
            return res.status(200).json({
                success: true,
                message: 'Order taken'
            });
        });
});

router.post('/update/:orderId', (req, res) => {
    const orderId = req.params.orderId;
    const {status} = req.body;
    Order.update({_id: orderId}, { $set: {status: status}})
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

router.get('/allOrders', (req, res) => {
    Order.find({})
        .then((orders) => {
            return res.status(200).json({
                success: true,
                message: 'Orders fetched',
                orders: orders
            });
        });
});

router.get('/status/:status', (req, res) => {
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

router.get('/myOrders/:userId', (req, res) => {
    const userId = req.params.userId;
    Order.find({customerID: userId})
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

module.exports = router;