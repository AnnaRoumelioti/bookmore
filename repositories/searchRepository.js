const pool = require("../config/db");

async function searchBooks(query) {

    const result = await pool.query(
        `
        SELECT
            b.id,
            b.title,
            b.price,
            b.cover_image_url,

            STRING_AGG(
                a.full_name,
                ', '
                ORDER BY a.full_name
            ) AS authors

        FROM books b

        LEFT JOIN book_authors ba
            ON b.id = ba.book_id

        LEFT JOIN authors a
            ON ba.author_id = a.id

        WHERE

            LOWER(b.title) LIKE LOWER($1)

            OR LOWER(a.full_name) LIKE LOWER($1)

            OR b.isbn LIKE $1

        GROUP BY
            b.id,
            b.title,
            b.price,
            b.cover_image_url

        ORDER BY
            b.title;
        `,
        [`%${query}%`]
    );

    return result.rows;
}

module.exports = {
    searchBooks
};