// Controller xử lý yêu cầu cho trang chủ
const getHomePage = (req, res) => {
    // Render file "index.ejs" và truyền biến "name" vào giao diện
    res.render("index", { name: "Người dùng" });
};

// Controller xử lý yêu cầu cho trang Menu
const MenuPage = (req, res) => {
    // Trả về nội dung khi truy cập route "/menu"
    res.render("index1", { 
        name: "Người dùng", 
        items: ["Mục 1", "Mục 2", "Mục 3"] 
    });
};

// Xuất các function để sử dụng trong file route.js
module.exports = {
    getHomePage,
    MenuPage
};
