const UserService = require('../services/user.service')

exports.getUsers = (request, response) => {
  // Validate request parameters, queries using express-validator
  let { data } = request.query
  UserService.getUsers(data)
  .then(listData => {
    response.json(listData)
  })
  .catch(error => {
    console.log("error-Controller getUsers", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.insertUser = (request, response) => {
  const data = request.body
  UserService.insertUser(data)
  .then(insertedData => {
    response.statusCode = 201;
    response.json(insertedData)
  })
  .catch(error => {
    console.log("error-Controller insertUser", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.getUser = (request, response) => {
  let { id } = request.params
  UserService.getUser(id)
  .then(data => {
    response.json(data)
  })
  .catch(error => {
    console.log("error-Controller getUser", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.updateUser = (request, response) => {
  let data = request.body
  let { id } = request.params
  data._id = id
  UserService.updateUser(data)
  .then(dataUpdated => {
    response.json(dataUpdated)
  })
  .catch(error => {
    console.log("error-Controller updateUser", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}

exports.deleteUser = (request, response) => {
  let { id } = request.params
  UserService.deleteUser(id)
  .then(dataDeleted => {
    response.json(dataDeleted)
  })
  .catch(error => {
    console.log("error-Controller deleteUser", error)
    response.statusCode = error.codigo
    response.json(error)
  })
}