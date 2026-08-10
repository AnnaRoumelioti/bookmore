class Purchase {

    static fromCartItem(userId, item) {

        return {
            user_id: userId,
            book_id: item.id,
            quantity: item.quantity,
            price: item.price
        };

    }

}

module.exports = Purchase;
