const sequelize = require("./config/database");

async function testConnection() {
    try {
        await sequelize.authenticate();
        console.log("thành công!");
    } catch (error) {
        console.error("thất bại:", error);
    } finally {
        await sequelize.close();
    }
}

testConnection();
