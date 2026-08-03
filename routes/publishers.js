const express = require("express");
const router = express.Router();

const controller = require("../controllers/publisherController");

router.get("/", controller.getAllPublishers);

router.get("/:id", controller.getPublisher);

module.exports = router;