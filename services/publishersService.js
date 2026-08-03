const repository = require("../repositories/publisherRepository");

async function getAllPublishers() {

    return await repository.getAllPublishers();

}

module.exports = {
    getAllPublishers
};