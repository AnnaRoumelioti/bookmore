const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Publisher = sequelize.define("Publisher", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(255)
    },
    country: {
        type: DataTypes.STRING(100)
    },
    website_url: {
        type: DataTypes.STRING(255)
    }
}, {
    tableName: "publishers"
});

module.exports = Publisher;
