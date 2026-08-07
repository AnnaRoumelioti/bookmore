const pool = require("../config/db");

async function getCartByUser(userId) {

    const result = await pool.query(
        `
        SELECT b.id, b.title, b.price, b.cover_image_url, c.quantity
        FROM cart_items c
        JOIN books b ON c.book_id = b.id
        WHERE c.user_id = $1
        ORDER BY b.title
        `,
        [userId]
    );

    return result.rows;

}

async function addToCart(userId, bookId) {

    await pool.query(
        `
        INSERT INTO cart_items (user_id, book_id)
        VALUES ($1, $2)
        ON CONFLICT (user_id, book_id)
        DO UPDATE SET quantity = cart_items.quantity + 1
        `,
        [userId, bookId]
    );

}

async function removeFromCart(userId, bookId) {

    await pool.query(
        `
        DELETE FROM cart_items
        WHERE user_id = $1 AND book_id = $2
        `,
        [userId, bookId]
    );

}

async function clearCart(userId) {

    await pool.query(
        `
        DELETE FROM cart_items
        WHERE user_id = $1
        `,
        [userId]
    );

}

module.exports = {
    getCartByUser,
    addToCart,
    removeFromCart,
    clearCart
};
