const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Author = sequelize.define("Author", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    full_name: {
        type: DataTypes.STRING(100),
        allowNull: false
    },
    slug: {
        type: DataTypes.STRING(150),
        allowNull: false,
        unique: true
    },
    biography: {
        type: DataTypes.TEXT
    }
}, {
    tableName: "authors"
});

module.exports = Author;
