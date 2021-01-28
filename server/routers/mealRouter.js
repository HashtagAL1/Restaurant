const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const { isModerator } = require('../services/authService');
require('../config/dbConfig');
const Meal = mongoose.model('Meal');

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

router.post('/add', isModerator, (req, res) => {
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

router.post('/edit/:mealId', isModerator, (req, res) => {
    const mealId = req.params.mealId;
    const editedMeal = req.body;
    Meal.updateOne({_id: mealId}, editedMeal)
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

router.post('/delete/:mealId', isModerator, (req, res) => {
    const mealId = req.params.mealId;
    Meal.deleteOne({_id: mealId})
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

router.get('/category/:category', (req, res) => {
    const category = req.params.category;
    Meal.find({category: category})
        .then((meals) => {
            if (meals.length === 0) {
                return res.status(200).json({
                    success: false,
                    message: 'No meals were found'
                });
            }
            return res.status(200).json({
                success: true,
                message: 'Meals fetched',
                meals: meals
            });
        });
});

router.get('/singleMeal/:mealId', (req, res) => {
    const mealId = req.params.mealId;
    Meal.findOne({_id: mealId})
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

router.post('/search', (req, res) => {
    const query = req.body['data'].toLowerCase();
    Meal.find({})
        .then((meals) => {
            meals = meals.filter(m => m.name.toLowerCase().indexOf(query) > -1);
            if (meals.length > 0) {
                return res.status(200).json({
                    success: true,
                    message: 'Meals fetched',
                    meals: meals
                });
            }
            return res.status(200).json({
                success: false,
                message: 'No meals were found'
            });
        });
});

module.exports = router;