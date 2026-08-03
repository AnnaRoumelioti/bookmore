const repository = require("../repositories/categoryRepository");

async function getBooks(category) {

    return await repository.getBooksByCategory(category);

}

module.exports = {
    getBooks
};