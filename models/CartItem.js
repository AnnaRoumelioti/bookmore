const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const CartItem = sequelize.define("CartItem", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 1,
        validate: {
            min: 1
        }
    }
}, {
    tableName: "cart_items"
});

module.exports = CartItem;
