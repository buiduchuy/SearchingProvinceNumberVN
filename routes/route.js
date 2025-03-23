const City = require('../models/cityModel');
// Import thư viện Express
const express = require('express');

// Import các function từ homeController, dùng để điều hướng đến trang tương ứng
const { getHomePage, MenuPage } = require('../controller/homeController');

// Khởi tạo Router từ Express
const router = express.Router();

// Định nghĩa route cho trang chủ ("/"), gọi function getHomePage để render trang
router.get("/", getHomePage);
router.get('/api/cities', async (req, res) => {
    try {
      const cities = await City.find().sort({ city: 1 });
      res.json(cities);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  
  router.get('/api/plate/:city', async (req, res) => {
    try {
      const city = await City.findOne({ city: req.params.city });
      res.json(city ? { plate_no: city.plate_no } : {});
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  });
  // Thêm logic xử lý lỗi chi tiết
router.get('/api/cities', async (req, res) => {
    try {
      console.log('Fetching cities...'); // Log kiểm tra
      const cities = await City.find().sort({ city: 1 });
      if(!cities.length) throw new Error('Không tìm thấy dữ liệu');
      res.json(cities);
    } catch (err) {
      console.error('Lỗi API cities:', err);
      res.status(500).json({ 
        error: err.message,
        hint: 'Kiểm tra kết nối MongoDB và collection cities'
      });
    }
  });
  
// Xuất router để sử dụng trong các file khác
module.exports = router;
