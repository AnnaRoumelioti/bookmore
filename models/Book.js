const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Book = sequelize.define("Book", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    title: {
        type: DataTypes.STRING(255),
        allowNull: false
    },
    isbn: {
        type: DataTypes.STRING(20),
        allowNull: false,
        unique: true
    },
    description: {
        type: DataTypes.TEXT
    },
    price: {
        type: DataTypes.DECIMAL(10, 2),
        allowNull: false,
        validate: {
            min: 0
        }
    },
    publication_year: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    book_language: {
        type: DataTypes.STRING(50),
        allowNull: false
    },
    cover_image_url: {
        type: DataTypes.STRING(255)
    },
    format: {
        type: DataTypes.STRING(20),
        allowNull: false,
        validate: {
            isIn: [["Paperback", "Hardcover", "E-book", "E-books", "Comic"]]
        }
    },
    stock_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        validate: {
            min: 0
        }
    },
    view_count: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    publisher_id: {
        type: DataTypes.INTEGER,
        allowNull: false
    }
}, {
    tableName: "books"
});

module.exports = Book;
