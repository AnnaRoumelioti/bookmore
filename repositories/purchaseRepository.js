const { Purchase: PurchaseModel, Book } = require("../models");
const cartRepository = require("./cartRepository");
const Cart = require("../domain/Cart");

async function createPurchasesFromCart(userId) {

    const items = await cartRepository.getCartByUser(userId);

    const lines = Cart.from(items).toPurchaseLines(userId);

    if (lines.length === 0) {
        return;
    }

    await PurchaseModel.bulkCreate(lines);

}

async function getPurchasesByUser(userId) {

    const purchases = await PurchaseModel.findAll({
        where: { user_id: userId },
        include: [
            {
                model: Book,
                attributes: ["id", "title", "cover_image_url"]
            }
        ],
        order: [["purchased_at", "DESC"]]
    });

    return purchases.map(purchase => ({
        id: purchase.id,
        quantity: purchase.quantity,
        price: purchase.price,
        purchased_at: purchase.purchased_at,
        book_id: purchase.Book.id,
        title: purchase.Book.title,
        cover_image_url: purchase.Book.cover_image_url
    }));

}

module.exports = {
    createPurchasesFromCart,
    getPurchasesByUser
};
