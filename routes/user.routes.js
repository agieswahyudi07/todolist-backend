const express = require('express');
const router = express.Router();
const userController = require('../controllers/user.controller');
const { verifyToken } = require('../middlewares/auth.middleware');


router.use(verifyToken);

router.get('/', userController.getUser);
router.put('/:id', userController.updateUser);

module.exports = router;
