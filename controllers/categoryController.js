const service = require("../services/categoryService");

async function getCategory(req, res) {

    try {

        const books =
            await service.getBooks(req.params.name);

        res.json(books);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getCategory
};