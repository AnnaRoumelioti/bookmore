const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/purchaseController");

router.get("/", controller.getPurchases);

module.exports = router;
