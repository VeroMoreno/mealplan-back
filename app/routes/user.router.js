const express = require('express');
const router = express.Router();
// const mealsRouter = require('express').Router()

const UserController = require('../controllers/user.controller')

router.get('/users', UserController.getUsers)
router.post('/users', UserController.insertUser)
router.get("/users/:id", UserController.getUser)
router.put("/users/:id", UserController.updateUser)
router.delete("/users/:id", UserController.deleteUser)

module.exports = router;