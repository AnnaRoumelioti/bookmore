const repository = require("../repositories/favoritesRepository");


async function getFavorites(userId) {

    return await repository.getFavoritesByUser(userId);

}


async function toggleFavorite(userId, bookId) {

    const isFavorite =
        await repository.isFavorite(userId, bookId);


    if (isFavorite) {

        await repository.removeFavorite(
            userId,
            bookId
        );

        return {
            favorited: false
        };

    }


    await repository.addFavorite(
        userId,
        bookId
    );

    return {
        favorited: true
    };

}


module.exports = {
    getFavorites,
    toggleFavorite
};