const searchService = require("../services/searchService");

async function searchBooks(req, res) {

    try {

        const query = req.query.q;

        if (!query || query.trim() === "") {
            return res.json([]);
        }

        const books = await searchService.searchBooks(query);

        res.json(books);

    } catch (error) {

        console.error("Search error:", error);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    searchBooks
};