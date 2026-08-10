const test = require("node:test");
const assert = require("node:assert");

const Purchase = require("../domain/Purchase");

const item = { id: 5, title: "Honey", price: "16.99", quantity: 2 };

test("records the price the book had at checkout", () => {
    assert.strictEqual(Purchase.fromCartItem(1, item).price, "16.99");
});

test("keeps the quantity that was in the cart", () => {
    assert.strictEqual(Purchase.fromCartItem(1, item).quantity, 2);
});

test("links the purchase to the buyer and the book", () => {
    const line = Purchase.fromCartItem(42, item);

    assert.strictEqual(line.user_id, 42);
    assert.strictEqual(line.book_id, 5);
});
