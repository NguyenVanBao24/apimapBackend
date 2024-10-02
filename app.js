const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors'); // Thêm dòng này
const userRoutes = require('./routes/userRoutes');

dotenv.config();

const app = express();
app.use(cors()); // Sử dụng cors để cho phép tất cả các origin
app.use(express.json());

// Sử dụng router
app.use('/api/users', userRoutes);

// Chạy server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
