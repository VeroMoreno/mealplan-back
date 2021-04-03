const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const router = require('express').Router()
// const express = require('express');
const User = require('../models/user.model')

router.post('/login', userAuthentication)

async function userAuthentication(request, response) {
  const { body } = request
  const { login, pw } = body
  // Comprobamos si login y pw están
  const user = await User.findOne({ login })
  console.log(user)
  const passwordCorrect = user === null
  ? false
  : await bcrypt.compare(pw, user.pw)

  if (!(user && passwordCorrect)) {
    response.status(401).json({
      error: 'invalid user or password'
    })
  }

  // firmamos el token
  const token = jwt.sign(
    {
      id    : user._id,
      login : user.login,
      rol   : user.rol
    },
    process.env.JWTSECRET,
    {
      algorithm: 'HS512'
    },
    {
      expiresIn: 60 * 60 * 24 * 7
    }
  )
  // mandamos el resultado
  const result = {
    usuario : user,
    JWT   : token
  }
  response.json(result)
  /*response.send({
    name: user.name,
    username: user.username,
    token
  })*/
}

module.exports = router;