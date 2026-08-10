const { DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

const Favorite = sequelize.define("Favorite", {
    user_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    },
    book_id: {
        type: DataTypes.INTEGER,
        primaryKey: true
    }
}, {
    tableName: "favorites"
});

module.exports = Favorite;
