const express = require('express');
const router = express.Router();
// const mealsRouter = require('express').Router()
const auth = require('../../middleware/auth');

const UserController = require('../controllers/user.controller')

router.get('/users', auth, UserController.getUsers)
router.post('/users', auth, UserController.insertUser)
router.get("/users/:id", auth, UserController.getUser)
router.put("/users/:id", auth, UserController.updateUser)
router.delete("/users/:id", auth, UserController.deleteUser)

module.exports = router;