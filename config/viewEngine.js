// Import module 'path' (module có sẵn trong Node.js) để xử lý đường dẫn thư mục
const path = require("path");

/**
 * Cấu hình View Engine cho ứng dụng Express
**/
const configViewEngine = (app) => {
    // Thiết lập thư mục chứa các file giao diện EJS
    app.set("views", path.join(__dirname, "../views"));

    // Cấu hình sử dụng EJS làm View Engine
    app.set("view engine", "ejs");
};

// Xuất function để sử dụng trong các file khác
module.exports = configViewEngine;
