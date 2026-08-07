const bookRepository = require("../repositories/bookRepository");

async function getBookById(id) {
    return await bookRepository.getBookById(id);
}

async function getLatestBooks() {
    return await bookRepository.getLatestBooks();
}

async function incrementBookViews(id) {
    return await bookRepository.incrementBookViews(id);
}

async function getRecommendedBooks() {
    return await bookRepository.getRecommendedBooks();
}

module.exports = {
    getBookById,
    getLatestBooks,
    incrementBookViews,
    getRecommendedBooks
};