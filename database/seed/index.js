const { sequelize, Publisher, Author, Category, Book, BookAuthor, BookCategory } = require("../../models");
const Slug = require("../../domain/Slug");

const categories = require("./categories");
const publishers = require("./publishers");
const authors = require("./authors");
const books = require("./books");
const bookAuthors = require("./bookAuthors");
const bookCategories = require("./bookCategories");

async function mapBy(model, field, transaction) {

    const rows = await model.findAll({
        attributes: ["id", field],
        raw: true,
        transaction
    });

    return new Map(rows.map(row => [row[field], row.id]));

}

async function seedDatabase() {

    const existing = await Book.count();

    if (existing > 0) {
        return;
    }

    await sequelize.transaction(async (transaction) => {

        await Category.bulkCreate(categories, { transaction });

        await Publisher.bulkCreate(publishers.map(publisher => ({
            name: publisher.name,
            country: publisher.country,
            website_url: publisher.website_url,
            slug: Slug.from(publisher.name)
        })), { transaction });

        await Author.bulkCreate(authors, { transaction });

        const publisherIdByName = await mapBy(Publisher, "name", transaction);

        await Book.bulkCreate(books.map(book => ({
            title: book.title,
            isbn: book.isbn,
            description: book.description,
            price: book.price,
            publication_year: book.publication_year,
            book_language: book.book_language,
            format: book.format,
            stock_quantity: book.stock_quantity,
            cover_image_url: book.cover_image_url,
            publisher_id: publisherIdByName.get(book.publisherName)
        })), { transaction });

        const bookIdByIsbn = await mapBy(Book, "isbn", transaction);
        const authorIdBySlug = await mapBy(Author, "slug", transaction);
        const categoryIdByName = await mapBy(Category, "name", transaction);

        await BookAuthor.bulkCreate(bookAuthors.map(row => ({
            book_id: bookIdByIsbn.get(row.isbn),
            author_id: authorIdBySlug.get(row.authorSlug)
        })), { transaction });

        await BookCategory.bulkCreate(bookCategories.map(row => ({
            book_id: bookIdByIsbn.get(row.isbn),
            category_id: categoryIdByName.get(row.categoryName)
        })), { transaction });

    });

    console.log("Seeded the database");

}

module.exports = {
    seedDatabase
};
