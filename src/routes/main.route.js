const express = require('express');
const router = express.Router();
const TodoController = require('../controllers/todo.controller')
const UserController = require('../controllers/user.controller')

router.get('/users', UserController.index);
router.post('/users', UserController.create)
router.put('/users/:id', UserController.edit)
router.delete('/users/:id', UserController.destroy)

router.get('/todo', TodoController.index);
router.post('/todo', TodoController.create);
router.put('/todo/:id', TodoController.edit);
router.delete('/todo/:id', TodoController.destroy);

module.exports = router;