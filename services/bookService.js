const bookRepository = require("../repositories/bookRepository");

async function getBookById(id) {
    return await bookRepository.getBookById(id);
}

module.exports = {
    getBookById
};