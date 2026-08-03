const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/categoryController");

router.get("/:name", controller.getCategory);

module.exports = router;