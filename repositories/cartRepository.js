const { CartItem, Book } = require("../models");
const { sequelize } = require("../config/database");

async function getCartByUser(userId) {

    const items = await CartItem.findAll({
        where: { user_id: userId },
        include: [
            {
                model: Book,
                attributes: ["id", "title", "price", "cover_image_url"]
            }
        ],
        order: [[Book, "title", "ASC"]]
    });

    return items.map(item => ({
        id: item.Book.id,
        title: item.Book.title,
        price: item.Book.price,
        cover_image_url: item.Book.cover_image_url,
        quantity: item.quantity
    }));

}

async function addToCart(userId, bookId) {

    await sequelize.transaction(async (transaction) => {

        const [item, created] = await CartItem.findOrCreate({
            where: { user_id: userId, book_id: bookId },
            defaults: { quantity: 1 },
            transaction
        });

        if (!created) {
            await item.increment("quantity", { transaction });
        }

    });

}

async function removeFromCart(userId, bookId) {

    await CartItem.destroy({
        where: { user_id: userId, book_id: bookId }
    });

}

async function clearCart(userId) {

    await CartItem.destroy({
        where: { user_id: userId }
    });

}

module.exports = {
    getCartByUser,
    addToCart,
    removeFromCart,
    clearCart
};
