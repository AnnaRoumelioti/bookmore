const test = require("node:test");
const assert = require("node:assert");

const Cart = require("../domain/Cart");

const items = [
    { id: 5, title: "Honey", price: "16.99", quantity: 2 },
    { id: 7, title: "Dracula", price: "10.00", quantity: 1 }
];

test("counts every copy, not every line", () => {
    assert.strictEqual(Cart.from(items).count(), 3);
});

test("totals price times quantity", () => {
    assert.strictEqual(Cart.from(items).total(), 43.98);
});

test("an empty cart totals zero", () => {
    assert.strictEqual(Cart.from([]).total(), 0);
});

test("turns the cart into one purchase line per book", () => {
    const lines = Cart.from(items).toPurchaseLines(42);

    assert.strictEqual(lines.length, 2);

    assert.deepStrictEqual(lines[0], {
        user_id: 42,
        book_id: 5,
        quantity: 2,
        price: "16.99"
    });
});
