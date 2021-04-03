require('dotenv').config()
require('./util/mongo')

const express = require('express')
const app = express()
const cors = require('cors')

const usersRouter = require('./users/routes/user.router')
const mealsRouter = require('./meals/routes/meal.router')

app.use(cors()) // any origin works
// Supports request when an obj is passed and it will be parsed
app.use(express.json())

// middlewares (order matters)
// app.use(interceptorJWT)
// app.use(authRouter) // autenticacion jwt
app.use(usersRouter)
app.use(mealsRouter)

app.disable('x-powered-by')

// modulo https with certificate here

// listening port
const PORT = process.env.PORT
//  https.createServer(cert, app).listen(....
const server = app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

module.exports = {app, server}