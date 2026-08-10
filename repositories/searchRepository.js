const { QueryTypes } = require("sequelize");
const { sequelize } = require("../config/database");

async function searchBooks(query) {

    return await sequelize.query(
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

            LOWER(b.title) LIKE LOWER(:pattern)

            OR LOWER(a.full_name) LIKE LOWER(:pattern)

            OR b.isbn LIKE :pattern

        GROUP BY
            b.id,
            b.title,
            b.price,
            b.cover_image_url

        ORDER BY
            b.title;
        `,
        {
            replacements: { pattern: `%${query}%` },
            type: QueryTypes.SELECT
        }
    );

}

module.exports = {
    searchBooks
};
