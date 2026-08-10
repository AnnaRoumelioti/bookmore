const { Book, Author, Favorite } = require("../models");
const BookSummary = require("../domain/BookSummary");

async function getFavoritesByUser(userId) {

    const books = await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url"],
        include: [
            {
                model: Favorite,
                where: { user_id: userId },
                attributes: []
            },
            {
                model: Author,
                attributes: ["full_name"],
                through: { attributes: [] }
            }
        ],
        order: [["title", "ASC"]]
    });

    return BookSummary.fromModels(books);

}

async function isFavorite(userId, bookId) {

    const count = await Favorite.count({
        where: { user_id: userId, book_id: bookId }
    });

    return count > 0;

}

async function addFavorite(userId, bookId) {

    await Favorite.findOrCreate({
        where: { user_id: userId, book_id: bookId }
    });

}

async function removeFavorite(userId, bookId) {

    await Favorite.destroy({
        where: { user_id: userId, book_id: bookId }
    });

}

module.exports = {
    getFavoritesByUser,
    isFavorite,
    addFavorite,
    removeFavorite
};
