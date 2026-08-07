const repository = require("../repositories/cartRepository");
const purchaseRepository = require("../repositories/purchaseRepository");

async function getCart(userId) {

    return await repository.getCartByUser(userId);

}

async function addToCart(userId, bookId) {

    return await repository.addToCart(userId, bookId);

}

async function removeFromCart(userId, bookId) {

    return await repository.removeFromCart(userId, bookId);

}

async function checkout(userId) {

    await purchaseRepository.createPurchasesFromCart(userId);

    await repository.clearCart(userId);

}

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    checkout
};
