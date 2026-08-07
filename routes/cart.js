const express = require("express");

const router = express.Router();

const controller =
    require("../controllers/cartController");

router.get("/", controller.getCart);
router.post("/", controller.addToCart);
router.post("/checkout", controller.checkout);
router.delete("/:bookId", controller.removeFromCart);

module.exports = router;
