const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/favoritesController");

router.get("/", controller.getFavorites);
router.post("/toggle", controller.toggleFavorite);

module.exports = router;
