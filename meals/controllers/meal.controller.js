const MealService = require('../services/meal.service')

exports.getMeals = (request, response) => {
  // Validate request parameters, queries using express-validator
  let data = request.query.data
  MealService.getMeals(data)
  .then(listData => {
    response.json(listData)
  })
  .catch(error => {
    console.log("error-Controller getMeals", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.insertMeal = (request, response) => {
  let data = request.body
  MealService.insertMeal(data)
  .then(insertedData => {
    response.statusCode = 201;
    response.json(insertedData)
  })
  .catch(error => {
    console.log("error-Controller insertMeal", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.getMeal = (request, response) => {
  let id = request.params.id
  MealService.getMeal(id)
  .then(mealData => {
    response.json(mealData)
  })
  .catch(error => {
    console.log("error-Controller getMeal", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.updateMeal = (request, response) => {
  let meal = request.body
  let id = request.params.id
  meal._id = id
  MealService.updateMeal(meal)
  .then(mealUpdated => {
    response.json(mealUpdated)
  })
  .catch(error => {
    console.log("error-Controller updateMeal", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.deleteMeal = (request, response) => {
  let { id } = request.params
  MealService.deleteMeal(id)
  .then(mealDeleted => {
    response.json(mealDeleted)
  })
  .catch(error => {
    console.log("error-Controller deleteMeal", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}