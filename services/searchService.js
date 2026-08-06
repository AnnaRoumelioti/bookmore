const searchRepository = require("../repositories/searchRepository");

async function searchBooks(query) {
    return await searchRepository.searchBooks(query);
}

module.exports = {
    searchBooks
};