const pool = require("../config/db");

async function getBooksByCategory(category) {

    const result = await pool.query(
        `
        SELECT
            b.id,
            b.title,
            b.price,
            b.cover_image_url,
            STRING_AGG(a.full_name, ', ') AS authors
        FROM books b
        JOIN book_categories bc ON b.id = bc.book_id
        JOIN categories c ON bc.category_id = c.id
        JOIN book_authors ba ON b.id = ba.book_id
        JOIN authors a ON ba.author_id = a.id
        WHERE c.name = $1
        GROUP BY
            b.id,
            b.title,
            b.price,
            b.cover_image_url
        ORDER BY b.title
        `,
        [category]
    );

    return result.rows;
}

module.exports = {
    getBooksByCategory
};