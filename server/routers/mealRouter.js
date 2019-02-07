const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
require('../config/dbConfig');
const Meal = mongoose.model('Meal');

router.post('/add', (req, res) => {
    const newMeal = req.body;
    Meal.findOne({name: newMeal.name})
        .then((meal) => {
            if (meal !== null) {
                return res.status(200).json({
                    success: false,
                    message: 'Duplicate name'
                });
            }
            Meal.create(newMeal)
                .then((nm) => {
                    return res.status(200).json({
                        success: true,
                        message: 'Meal added successfully'
                    });
                });
        });
});

router.post('/edit/:mealId', (req, res) => {
    const mealId = req.params.mealId;
    const editedMeal = req.body;
    Meal.update({_id: mealId}, editedMeal)
        .then((em) => {
            return res.status(200).json({
                success: true,
                message: 'Meal edited successfully'
            });
        })
        .catch((err) => {
            return res.status(200).json({
                success: false,
                message: 'Invalid data'
            });
        });
});

router.post('/delete/:mealId', (req, res) => {
    const mealId = req.params.mealId;
    Meal.remove({_id: mealId})
        .then(() => {
            return res.status(200).json({
                success: true,
                message: 'Meal deleted'
            });
        })
        .catch((err) => {
            return res.status(200).json({
                success: false,
                message: 'Invalid mealId'
            });
        });
});

router.get('/allMeals', (req, res) => {
    Meal.find({})
        .then((meals) => {
            return res.status(200).json({
                success: true,
                message: 'Meals fetched',
                meals: meals
            });
        });
});

router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    Meal.find({category: category})
        .then((meals) => {
            return res.status(200).json({
                success: true,
                message: 'Meals fetched',
                meals: meals
            });
        });
});

router.get('/singleMeal/:mealId', (req, res) => {
    const mealId = req.params.mealId;
    Meal.find({_id: mealId})
        .then((meal) => {
            return res.status(200).json({
                success: true,
                message: 'Meal fetched',
                meal: meal
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