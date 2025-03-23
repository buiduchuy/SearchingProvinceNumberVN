// Import thư viện Express
const express = require("express");

// Import module 'path' (module có sẵn trong Node.js) để làm việc với đường dẫn file
const path = require("path");

// Import dotenv để đọc các biến môi trường từ file .env
require("dotenv").config();
// Add below dotenv config
const mongoose = require('mongoose');
// Connect to MongoDB
mongoose.connect(process.env.DB_URI)
  .then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import cấu hình View Engine để hiển thị giao diện với EJS
const configViewEngine = require("./config/viewEngine");

// Import file định tuyến (route) chứa các đường dẫn của ứng dụng
const router = require("./routes/route");

// Khởi tạo ứng dụng Express
const app = express();

// Cấu hình để Express phục vụ các file tĩnh (CSS, JS, hình ảnh) từ thư mục 'public'
app.use(express.static(path.join(__dirname, "public")));

// Cấu hình View Engine (EJS) để render giao diện
configViewEngine(app);

// Sử dụng Router để định nghĩa các đường dẫn (routes)
app.use("/", router);

// Thiết lập PORT và HOSTNAME từ biến môi trường hoặc sử dụng giá trị mặc định
const PORT = process.env.PORT || 3000;
const HOSTNAME = process.env.HOSTNAME || "localhost";

// Khởi động server
app.listen(PORT, () => {
    console.log(`Server đang chạy tại: http://${HOSTNAME}:${PORT}`);
});
