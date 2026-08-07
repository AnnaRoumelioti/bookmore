const pool = require("../config/db");

async function createPurchasesFromCart(userId) {

    await pool.query(
        `
        INSERT INTO purchases (user_id, book_id, quantity, price)
        SELECT c.user_id, c.book_id, c.quantity, b.price
        FROM cart_items c
        JOIN books b ON c.book_id = b.id
        WHERE c.user_id = $1
        `,
        [userId]
    );

}

async function getPurchasesByUser(userId) {

    const result = await pool.query(
        `
        SELECT p.id, p.quantity, p.price, p.purchased_at,
               b.id AS book_id, b.title, b.cover_image_url
        FROM purchases p
        JOIN books b ON p.book_id = b.id
        WHERE p.user_id = $1
        ORDER BY p.purchased_at DESC
        `,
        [userId]
    );

    return result.rows;

}

module.exports = {
    createPurchasesFromCart,
    getPurchasesByUser
};
