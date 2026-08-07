const service = require("../services/favoritesService");

async function getFavorites(req, res) {

    try {

        const books =
            await service.getFavorites(req.session.user.id);

        res.json(books);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

async function toggleFavorite(req, res) {

    try {

        const result = await service.toggleFavorite(
            req.session.user.id,
            req.body.bookId
        );

        res.json(result);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getFavorites,
    toggleFavorite
};
