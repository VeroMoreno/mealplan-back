require('dotenv').config()
require('./util/mongo')

const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors()) // any origin works
// Supports request when an obj is passed and it will be parsed
app.use(express.json())

// middlewares (order matters)

// listening port
const PORT = process.env.PORT
const server = app.listen(PORT, () => {
  console.log(`Server running in port ${PORT}`)
})

module.exports = {app, server}