require("dotenv").config();
const express = require("express");
const sequelize = require("./config/database");
const userRoutes = require("./routes/UserRoutes");
const loginRoutes = require("./routes/LoginRoutes");
const loaiNhaDatRoutes = require("./routes/LoaiNhaDatRoutes");
const nhaDatRoutes = require("./routes/NhaDatRoutes");
const registerRoutes = require("./routes/RegisterRoutes");
const khachHangRoutes = require("./routes/KhachHangRoutes");
const nhanVienRoutes = require("./routes/NhanVienRoutes");
const authRoutes = require("./routes/AuthRoutes");
const baiVietRoutes = require("./routes/BaiVietRoutes");
const danhMucYeuThichRoutes = require("./routes/DanhMucYeuThichRoutes");
const doiMatKhauUserRoutes = require("./routes/DoiMatKhauUserRoutes");
const datLichHenRoutes = require("./routes/DatLichHenRoutes");
const batDongSanNoiBatRoutes = require("./routes/BatDongSanNoiBatRoutes");
const profileRoutes = require("./routes/ProfileRoutes");


require("./models/quanhe");

const app = express();


app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:3001", "https://batdongsan-blacks.netlify.app/"],  // url FE
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

app.use(express.json());


app.use("/api/users", userRoutes);
app.use("/api", loginRoutes);

app.use("/api/loaiNhaDat", loaiNhaDatRoutes);

app.use("/api/nhaDat", nhaDatRoutes);

app.use("/api", registerRoutes);


app.use("/api/khachHang", khachHangRoutes);

app.use("/api/nhanVien", nhanVienRoutes);
app.use("/api", authRoutes);

app.use("/api/danh-muc-yeu-thich", danhMucYeuThichRoutes);

app.use("/api/bai-viet", baiVietRoutes);

app.use("/api/lichHen", datLichHenRoutes);
app.use("/api", doiMatKhauUserRoutes);
app.use("/api", batDongSanNoiBatRoutes);
app.use("/api", profileRoutes);
const PORT = process.env.PORT;

sequelize.sync({ alter: true })
    .then(() => {
        console.log("Database synced!");
        app.listen(PORT, () => {
            console.log(`Server chạy tại http://localhost:${PORT}`);
        });
    })
    .catch((error) => {
        console.error("Lỗi kết nối database:", error);
    });

