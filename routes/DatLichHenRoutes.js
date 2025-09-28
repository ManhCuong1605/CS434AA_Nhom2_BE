const express = require("express");
const router = express.Router();
const lichHenController = require("../controller/DatLichHenController");
const { verifyToken, checkRole } = require("../middlewares/authMiddleware");

router.post("/dat-lich", verifyToken, checkRole(["KHACHHANG"]), lichHenController.datLichHen);
router.put("/duyet-lich/:id", verifyToken, checkRole(["ADMIN", "KHACHHANG"]), lichHenController.duyetLichHen);
router.put("/huy-lich/:id", lichHenController.huyLichHen);

router.get("/nhanvien/:id", verifyToken, checkRole(["NHANVIEN"]), lichHenController.getLichHenNhanVien);

module.exports = router;

