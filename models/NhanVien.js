const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const NhanVien = sequelize.define("NhanVien", {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    MaNV: {
        type: DataTypes.STRING(10),
        allowNull: false,
    },





    
    NgayLamViec: {
        type: DataTypes.DATE,
    },
    User_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: "NhanVien",
    timestamps: true,
    indexes: [
        { unique: true, fields: ["MaNV"] }

    ]
});

module.exports = NhanVien;
