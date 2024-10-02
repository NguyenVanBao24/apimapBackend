const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Các route cho người dùng
router.get('/', userController.getAllUsers);
router.post('/', userController.createUser);

module.exports = router;
