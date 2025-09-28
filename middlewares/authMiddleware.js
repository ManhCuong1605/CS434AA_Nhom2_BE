const jwt = require("jsonwebtoken");

const verifyToken = (req, res, next) => {
    const token = req.header("Authorization")?.split(" ")[1];
    if (!token) {
        return res.status(401).json({ message: "Vui lòng đăng nhập!" });
    }

    
};

// Middleware kiểm tra quyền 
const checkRole = (allowRoles) => (req, res, next) => {
    if (!req.user || !req.user.roles || !req.user.roles.some(role => allowRoles.includes(role))) {
        return res.status(403).json({ message: "Bạn không có quyền truy cập!" });
    }
    next();
};

module.exports = { verifyToken, checkRole };