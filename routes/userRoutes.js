const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Các route cho người dùng
router.get('/api/users', userController.getAllUsers);
router.post('/api/users', userController.createUser);

module.exports = router;
