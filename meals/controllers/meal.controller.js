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

