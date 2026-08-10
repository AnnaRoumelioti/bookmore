const { Book, Author, Publisher } = require("../models");
const BookSummary = require("../domain/BookSummary");

async function getBookById(id) {

    const book = await Book.findOne({
        where: { id },
        include: [
            {
                model: Publisher,
                attributes: ["name", "slug"]
            },
            {
                model: Author,
                attributes: ["full_name", "slug"],
                through: { attributes: [] }
            }
        ]
    });

    if (!book) {
        return undefined;
    }

    const authorSlugs = book.Authors.map(author => author.slug).sort();

    return {
        id: book.id,
        title: book.title,
        isbn: book.isbn,
        description: book.description,
        price: book.price,
        publication_year: book.publication_year,
        book_language: book.book_language,
        format: book.format,
        stock_quantity: book.stock_quantity,
        cover_image_url: book.cover_image_url,
        publisher_name: book.Publisher ? book.Publisher.name : null,
        publisher_slug: book.Publisher ? book.Publisher.slug : null,
        authors: BookSummary.authorsOf(book),
        author_slug: authorSlugs.length > 0 ? authorSlugs[0] : null
    };

}

async function getLatestBooks() {

    const books = await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url"],
        include: [
            {
                model: Author,
                attributes: ["full_name"],
                through: { attributes: [] }
            }
        ],
        order: [["id", "DESC"]],
        limit: 20
    });

    return BookSummary.fromModels(books);

}

async function incrementBookViews(id) {

    await Book.increment("view_count", { where: { id } });

}

async function getRecommendedBooks() {

    const books = await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url", "view_count"],
        include: [
            {
                model: Author,
                attributes: ["full_name"],
                through: { attributes: [] }
            }
        ],
        order: [["view_count", "DESC"], ["id", "DESC"]],
        limit: 20
    });

    return BookSummary.fromModels(books);

}

module.exports = {
    getBookById,
    getLatestBooks,
    incrementBookViews,
    getRecommendedBooks
};
