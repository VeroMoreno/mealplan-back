const express = require('express');
const router = express.Router();
// const mealsRouter = require('express').Router()

const MealController = require('../controllers/meal.controller')

router.get('/meals', MealController.getMeals)
router.post('/meals', MealController.insertMeal)
router.get("/meals/:id", MealController.getMeal)
router.put("/meals/:id", MealController.updateMeal)
router.delete("/meals/:id", MealController.deleteMeal)

module.exports = router;