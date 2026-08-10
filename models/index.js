const { sequelize } = require("../config/database");

const Publisher = require("./Publisher");
const Author = require("./Author");
const Category = require("./Category");
const Book = require("./Book");
const BookAuthor = require("./BookAuthor");
const BookCategory = require("./BookCategory");
const User = require("./User");
const Favorite = require("./Favorite");
const CartItem = require("./CartItem");
const Purchase = require("./Purchase");

Publisher.hasMany(Book, { foreignKey: "publisher_id" });
Book.belongsTo(Publisher, { foreignKey: "publisher_id" });

Book.belongsToMany(Author, { through: BookAuthor, foreignKey: "book_id", otherKey: "author_id" });
Author.belongsToMany(Book, { through: BookAuthor, foreignKey: "author_id", otherKey: "book_id" });

Book.belongsToMany(Category, { through: BookCategory, foreignKey: "book_id", otherKey: "category_id" });
Category.belongsToMany(Book, { through: BookCategory, foreignKey: "category_id", otherKey: "book_id" });

User.hasMany(Favorite, { foreignKey: "user_id" });
Favorite.belongsTo(User, { foreignKey: "user_id" });
Book.hasMany(Favorite, { foreignKey: "book_id" });
Favorite.belongsTo(Book, { foreignKey: "book_id" });

User.hasMany(CartItem, { foreignKey: "user_id" });
CartItem.belongsTo(User, { foreignKey: "user_id" });
Book.hasMany(CartItem, { foreignKey: "book_id" });
CartItem.belongsTo(Book, { foreignKey: "book_id" });

User.hasMany(Purchase, { foreignKey: "user_id" });
Purchase.belongsTo(User, { foreignKey: "user_id" });
Book.hasMany(Purchase, { foreignKey: "book_id" });
Purchase.belongsTo(Book, { foreignKey: "book_id" });

module.exports = {
    sequelize,
    Publisher,
    Author,
    Category,
    Book,
    BookAuthor,
    BookCategory,
    User,
    Favorite,
    CartItem,
    Purchase
};
