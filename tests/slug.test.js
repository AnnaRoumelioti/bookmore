const test = require("node:test");
const assert = require("node:assert");

const Slug = require("../domain/Slug");

test("lowercases and joins words with hyphens", () => {
    assert.strictEqual(Slug.from("Vintage Classics"), "vintage-classics");
});

test("collapses punctuation and spaces into a single hyphen", () => {
    assert.strictEqual(Slug.from("Simon & Schuster"), "simon-schuster");
});

test("does not leave a hyphen at the start or the end", () => {
    assert.strictEqual(Slug.from("  Penguin Books!  "), "penguin-books");
});

test("keeps digits", () => {
    assert.strictEqual(Slug.from("Head of Zeus 2020"), "head-of-zeus-2020");
});
