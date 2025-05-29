const express = require('express');
const router = express.Router();
const taskController = require('../controllers/task.controller');
const { verifyToken } = require('../middlewares/auth.middleware');

console.log(verifyToken);

router.use(verifyToken);

router.get('/', taskController.getAllTasks);
router.post('/', taskController.createTask);
router.put('/:id', taskController.updateTask);
router.delete('/:id', taskController.deleteTask);

module.exports = router;
