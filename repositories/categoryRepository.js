const { Book, Author, Category } = require("../models");
const BookSummary = require("../domain/BookSummary");

async function getBooksByCategory(category) {

    const books = await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url"],
        include: [
            {
                model: Category,
                where: { name: category },
                attributes: [],
                through: { attributes: [] }
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

module.exports = {
    getBooksByCategory
};
