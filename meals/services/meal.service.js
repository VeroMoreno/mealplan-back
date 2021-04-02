const Meal = require('../models/meal.model')

exports.getMeals = (query) => {
  return new Promise((resolve, reject) => {
      //revisar la query y adaptarlo a las necesidades de MongoDB...
      Meal.find( /*query*/ )
      .then( mealsData => resolve(mealsData))
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'¡Error en la base de datos!'})
      })
  })
}

exports.insertMeal = (data) => {
  return new Promise((resolve, reject) => {
      delete data._id
      let meal = new Meal(data)
      meal.save()
      .then(mealInserted => {
        resolve(mealInserted)
      })
      .catch(error => {
        console.log(error)
        reject({ codigo:500, mensaje: 'Error with Database!'})
      })
  })
}