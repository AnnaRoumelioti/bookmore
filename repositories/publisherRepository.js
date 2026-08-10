const { Publisher, Book, Author } = require("../models");
const BookSummary = require("../domain/BookSummary");

async function getAllPublishers() {

    return await Publisher.findAll({
        attributes: ["id", "name", "slug", "country", "website_url"],
        order: [["name", "ASC"]],
        raw: true
    });

}

async function getPublisherWithBooks(slug) {

    const publisher = await Publisher.findOne({
        where: { slug },
        attributes: ["id", "name", "slug", "country", "website_url"],
        raw: true
    });

    const books = await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url"],
        where: { publisher_id: publisher.id },
        include: [
            {
                model: Author,
                attributes: ["full_name"],
                through: { attributes: [] }
            }
        ],
        order: [["title", "ASC"]]
    });

    return {
        publisher,
        books: BookSummary.fromModels(books)
    };

}

module.exports = {
    getAllPublishers,
    getPublisherWithBooks
};
