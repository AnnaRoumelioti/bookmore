const authorsRepository = require("../repositories/authorsRepository");

async function getAllAuthors() {
    return await authorsRepository.getAllAuthors();
}

async function getAuthorBySlug(slug) {
    return await authorsRepository.getAuthorBySlug(slug);
}

async function getBooksByAuthorSlug(slug) {
    return await authorsRepository.getBooksByAuthorSlug(slug);
}

module.exports = {
    getAllAuthors,
    getAuthorBySlug,
    getBooksByAuthorSlug
};