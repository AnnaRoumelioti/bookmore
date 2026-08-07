const repository = require("../repositories/favoritesRepository");

async function getFavorites(userId) {

    return await repository.getFavoritesByUser(userId);

}

async function toggleFavorite(userId, bookId) {

    const favorited = await repository.isFavorite(userId, bookId);

    if (favorited) {

        await repository.removeFavorite(userId, bookId);

        return { favorited: false };

    }

    await repository.addFavorite(userId, bookId);

    return { favorited: true };

}

module.exports = {
    getFavorites,
    toggleFavorite
};
