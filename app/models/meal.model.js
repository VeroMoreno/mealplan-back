const { Schema, model } = require('mongoose')

const mealSchema = new Schema({
  // _id       : ObjectID,
  name         : String,
  type         : String,
  ingredients  : [ String ], // ?
  calories     : [
    {
      // type: Schema.Types.ObjectId,
      carbohydrates: Number,
      proteins: Number,
      fats: Number
    }
  ]
})

mealSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Meal = model('Meal', mealSchema)
module.exports = Meal