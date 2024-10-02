let users = []; // Danh sách người dùng tạm thời lưu trong bộ nhớ
const data = require('../data/data.json');

// Lấy tất cả người dùng
exports.getAllUsers = () => {
  return data;
};

// Tạo người dùng mới
exports.createUser = (userData) => {
  const newUser = {
    id: users.length + 1,
    name: userData.name,
    email: userData.email,
  };
  users.push(newUser);
  return newUser;
};
