var express = require('express');
var router = express.Router();
// const mealsRouter = require('express').Router()

var MealController = require('../controllers/meal.controller')

router.get('/meals', MealController.getMeals)
router.post('/meals', MealController.insertMeal)
/*
router.get("/meals/:id", findMeal)
router.put("/meals/:id", updateMeal)
router.delete("/meals", deleteMeal)
*/

module.exports = router;