const repository = require("../repositories/purchaseRepository");

async function getPurchases(userId) {

    return await repository.getPurchasesByUser(userId);

}

module.exports = {
    getPurchases
};
