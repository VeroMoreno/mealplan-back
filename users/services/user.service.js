const User = require('../models/user.model')

exports.getUsers = (query) => {
  return new Promise((resolve, reject) => {
      User.find( /*query*/ )
      .then( data => resolve(data))
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}

exports.insertUser = (data) => {
  return new Promise((resolve, reject) => {
      delete data._id
      let userData = new User(data)
      userData.save()
      .then(dataInserted => {
        resolve(dataInserted)
      })
      .catch(error => {
        console.log(error)
        reject({ codigo:500, mensaje: 'Error with Database!'})
      })
  })
}

exports.getUser = (id) => {
  return new Promise((resolve, reject) => {
    User.findById(id)
      .then( data => {
        if (!data) {
          reject({ codigo:404, mensaje:"Don´exist the user with this ID"})
          return
        }
        resolve(data)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}

exports.updateUser = (userData) => {
  return new Promise((resolve, reject) => {
    User.findByIdAndUpdate(userData._id, userData)
      .then(userUpdated => {
        if(!userUpdated){
          reject({ codigo:404, mensaje:"Don't exist a meal with id " + userData._id})
          return
        }
        resolve(userUpdated)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}

exports.deleteUser = (id) => {
  return new Promise((resolve, reject) => {
    User.findByIdAndDelete(id)
      .then(dataDeleted => {
        if(dataDeleted === null){
          reject({ codigo:404, mensaje:"Don't exist an user with id for delete" + mealData._id})
          return
        }
        resolve(dataDeleted)
      })
      .catch( error => {
          console.log(error)
          reject({ codigo:500, mensaje:'Database error!'})
      })
  })
}