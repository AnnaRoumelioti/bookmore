const Purchase = require("./Purchase");

class Cart {

    constructor(items) {

        this.items = items;

    }

    static from(items) {

        return new Cart(items);

    }

    count() {

        return this.items.reduce((total, item) => total + item.quantity, 0);

    }

    total() {

        return this.items.reduce((total, item) => total + Number(item.price) * item.quantity, 0);

    }

    toPurchaseLines(userId) {

        return this.items.map(item => Purchase.fromCartItem(userId, item));

    }

}

module.exports = Cart;
