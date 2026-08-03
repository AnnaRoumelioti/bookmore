const pool = require("../config/db");

async function getBookById(id) {

    const result = await pool.query(
        `
        SELECT
            b.id,
            b.title,
            b.isbn,
            b.description,
            b.price,
            b.publication_year,
            b.book_language,
            b.format,
            b.stock_quantity,
            b.cover_image_url,
            p.id AS publisher_id,
            p.name AS publisher,
            STRING_AGG(a.full_name, ', ') AS authors
        FROM books b
        JOIN publishers p
            ON p.id = b.publisher_id
        JOIN book_authors ba
            ON ba.book_id = b.id
        JOIN authors a
            ON a.id = ba.author_id
        WHERE b.id = $1
        GROUP BY
            b.id,
            p.id,
            p.name
        `,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    getBookById
};