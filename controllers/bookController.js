const bookService = require("../services/bookService");

async function getBookById(req, res) {

    try {

        const book =
            await bookService.getBookById(req.params.id);

        res.json(book);

    } catch (error) {

        console.error(error);
        res.status(500).json({
            error: "Internal Server Error"
        });

    }

}

module.exports = {
    getBookById
};