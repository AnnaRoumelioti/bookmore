const pool = require("../config/db");

async function getFavoritesByUser(userId) {

    const result = await pool.query(
        `
        SELECT b.id, b.title, b.price, b.cover_image_url,
               STRING_AGG(a.full_name, ', ') AS authors
        FROM favorites f
        JOIN books b ON f.book_id = b.id
        LEFT JOIN book_authors ba ON b.id = ba.book_id
        LEFT JOIN authors a ON ba.author_id = a.id
        WHERE f.user_id = $1
        GROUP BY b.id, b.title, b.price, b.cover_image_url
        ORDER BY b.title
        `,
        [userId]
    );

    return result.rows;

}

async function isFavorite(userId, bookId) {

    const result = await pool.query(
        `
        SELECT 1
        FROM favorites
        WHERE user_id = $1 AND book_id = $2
        `,
        [userId, bookId]
    );

    return result.rows.length > 0;

}

async function addFavorite(userId, bookId) {

    await pool.query(
        `
        INSERT INTO favorites (user_id, book_id)
        VALUES ($1, $2)
        `,
        [userId, bookId]
    );

}

async function removeFavorite(userId, bookId) {

    await pool.query(
        `
        DELETE FROM favorites
        WHERE user_id = $1 AND book_id = $2
        `,
        [userId, bookId]
    );

}

module.exports = {
    getFavoritesByUser,
    isFavorite,
    addFavorite,
    removeFavorite
};
