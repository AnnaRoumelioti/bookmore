const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");



router.get("/", authorsController.getAllAuthors);

router.get("/:slug", authorsController.getAuthorBySlug);

router.get("/:slug/books", authorsController.getBooksByAuthor);

module.exports = router;