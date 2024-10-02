const userService = require('../services/userService');

// Lấy tất cả người dùng
exports.getAllUsers = (req, res) => {
  const users = userService.getAllUsers();
  res.json(users);
};

// Tạo người dùng mới
exports.createUser = (req, res) => {
  const newUser = userService.createUser(req.body);
  res.status(201).json(newUser);
};
