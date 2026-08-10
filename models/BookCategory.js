const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const BookCategory = sequelize.define("BookCategory", {
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: "book_categories"
});

module.exports = BookCategory;
