const Meal = require('../models/meal.model')

exports.getMeals = (query) => {
  return new Promise((resolve, reject) => {
      //revisar la query y adaptarlo a las necesidades de MongoDB...
      Meal.find( /*query*/ )
      .then( mealsData => resolve(mealsData))
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
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

exports.getMeal = (id) => {
  return new Promise((resolve, reject) => {
      Meal.findById(id)
      .then( mealData => {
        if (!mealData) {
          reject({ codigo:404, mensaje:"Don´exist the meal with this ID"})
          return
        }
        resolve(mealData)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}

exports.updateMeal = (mealData) => {
  return new Promise((resolve, reject) => {
      Meal.findByIdAndUpdate(mealData._id, mealData)
      .then(mealUpdated => {
        if(!mealUpdated){
          reject({ codigo:404, mensaje:"Don't exist a meal with id " + mealData._id})
          return
        }
        resolve(mealUpdated)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}

exports.deleteMeal = (id) => {
  return new Promise((resolve, reject) => {
      Meal.findByIdAndDelete(id)
      .then(mealDeleted => {
        if(mealDeleted === null){
          reject({ codigo:404, mensaje:"Don't exist a meal with id for delete" + mealData._id})
          return
        }
        resolve(mealDeleted)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}