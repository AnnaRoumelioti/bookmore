const bookService = require("../services/bookService");

async function getBookById(req, res) {

    try {

        const book = await bookService.getBookById(req.params.id);

        if (!book) {
            return res.status(404).json({
                error: "Book not found"
            });
        }

        await bookService.incrementBookViews(req.params.id);

        res.json(book);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });

    }
}

async function getLatestBooks(req, res) {

    try {

        const books = await bookService.getLatestBooks();

        res.json(books);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });

    }
}

async function getRecommendedBooks(req, res) {

    try {

        const books = await bookService.getRecommendedBooks();

        res.json(books);

    } catch (error) {

        console.error(error);

        res.status(500).json({
            error: "Internal server error"
        });

    }
}

module.exports = {
    getBookById,
    getLatestBooks,
    getRecommendedBooks
};