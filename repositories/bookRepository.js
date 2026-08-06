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

            p.name AS publisher_name,
            p.slug AS publisher_slug,

            STRING_AGG(a.full_name, ', ' ORDER BY a.full_name) AS authors,
            
            MIN(a.slug) AS author_slug

        FROM books b

        LEFT JOIN publishers p
            ON b.publisher_id = p.id

        LEFT JOIN book_authors ba
            ON b.id = ba.book_id

        LEFT JOIN authors a
            ON ba.author_id = a.id

        WHERE b.id = $1

        GROUP BY
            b.id,
            p.name,
            p.slug;
        `,
        [id]
    );

    return result.rows[0];
}

module.exports = {
    getBookById
};