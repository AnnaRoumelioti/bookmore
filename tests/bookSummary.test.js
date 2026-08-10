const test = require("node:test");
const assert = require("node:assert");

const BookSummary = require("../domain/BookSummary");

function bookWith(authors) {
    return {
        id: 5,
        title: "Honey",
        price: "16.99",
        cover_image_url: "images/books/honey.jpg",
        isbn: "9781234567890",
        stock_quantity: 12,
        Authors: authors
    };
}

test("joins the author names alphabetically", () => {
    const book = bookWith([
        { full_name: "Tim Raine" },
        { full_name: "Dearbhla Kelly" },
        { full_name: "Kate Wiles" }
    ]);

    assert.strictEqual(BookSummary.authorsOf(book), "Dearbhla Kelly, Kate Wiles, Tim Raine");
});

test("returns an empty string when a book has no authors", () => {
    assert.strictEqual(BookSummary.authorsOf(bookWith([])), "");
});

test("keeps only the fields the book cards need", () => {
    const summary = BookSummary.fromModel(bookWith([{ full_name: "Imani Thompson" }]));

    assert.deepStrictEqual(summary, {
        id: 5,
        title: "Honey",
        price: "16.99",
        cover_image_url: "images/books/honey.jpg",
        authors: "Imani Thompson"
    });
});

test("keeps the price as a string so prices render exactly", () => {
    const summary = BookSummary.fromModel(bookWith([]));

    assert.strictEqual(typeof summary.price, "string");
});
