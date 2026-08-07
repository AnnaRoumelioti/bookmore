const express = require("express");
const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/latest", bookController.getLatestBooks);
router.get("/recommended", bookController.getRecommendedBooks);
router.get("/:id", bookController.getBookById);

module.exports = router;