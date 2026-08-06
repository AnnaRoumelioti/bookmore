const pool = require("../config/db");

async function getAllPublishers() {

    const result = await pool.query(`
        SELECT
            id,
            name,
            slug,
            country,
            website_url
        FROM publishers
        ORDER BY name
    `);

    return result.rows;
}

async function getPublisherWithBooks(slug) {

    const publisherResult = await pool.query(
        `
        SELECT
            id,
            name,
            slug,
            country,
            website_url
        FROM publishers
        WHERE slug = $1
        `,
        [slug]
    );

    const publisherId = publisherResult.rows[0].id;

    const booksResult = await pool.query(
        `
        SELECT
            b.id,
            b.title,
            b.price,
            b.cover_image_url,
            STRING_AGG(a.full_name, ', ') AS authors
        FROM books b

        JOIN book_authors ba
            ON b.id = ba.book_id

        JOIN authors a
            ON ba.author_id = a.id

        WHERE b.publisher_id = $1

        GROUP BY
            b.id,
            b.title,
            b.price,
            b.cover_image_url

        ORDER BY b.title
        `,
        [publisherId]
    );

    return {
        publisher: publisherResult.rows[0],
        books: booksResult.rows
    };
}

module.exports = {
    getAllPublishers,
    getPublisherWithBooks
};