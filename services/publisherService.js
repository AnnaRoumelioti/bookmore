const repository = require("../repositories/publisherRepository");

async function getAllPublishers() {

    return await repository.getAllPublishers();

}

async function getPublisherWithBooks(id) {

    return await repository.getPublisherWithBooks(id);

}

module.exports = {
    getAllPublishers,
    getPublisherWithBooks
};