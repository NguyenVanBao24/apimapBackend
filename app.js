const express = require('express');
const dotenv = require('dotenv');
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(express.json()); // Để phân tích dữ liệu JSON từ body request

// Sử dụng router
app.use('/api/users', userRoutes);

// Chạy server
const PORT = process.env.PORT || 8081;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
