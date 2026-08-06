const authorsService = require("../services/authorsService");


async function getAllAuthors(req, res) {
    try {
        const authors = await authorsService.getAllAuthors();
        res.json(authors);
    } catch (error) {
        console.error("Error fetching authors:", error);
        res.status(500).json({
            error: "Failed to fetch authors"
        });
    }
}

async function getAuthorBySlug(req, res) {
    try {
        const { slug } = req.params;

        const author = await authorsService.getAuthorBySlug(slug);

        if (!author) {
            return res.status(404).json({
                error: "Author not found"
            });
        }

        res.json(author);
    } catch (error) {
        console.error("Error fetching author:", error);
        res.status(500).json({
            error: "Failed to fetch author"
        });
    }
}


async function getBooksByAuthor(req, res) {
    try {
        const { slug } = req.params;

        const books = await authorsService.getBooksByAuthorSlug(slug);

        res.json(books);
    } catch (err) {
        console.error(err);
        res.status(500).json({
            error: "Failed to fetch books"
        });
    }
}

module.exports = {
    getAllAuthors,
    getAuthorBySlug,
    getBooksByAuthor
};