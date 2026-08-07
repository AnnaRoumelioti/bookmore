const service = require("../services/cartService");

async function getCart(req, res) {

    try {

        const items =
            await service.getCart(req.session.user.id);

        res.json(items);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

async function addToCart(req, res) {

    try {

        await service.addToCart(
            req.session.user.id,
            req.body.bookId
        );

        res.json({ added: true });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

async function removeFromCart(req, res) {

    try {

        await service.removeFromCart(
            req.session.user.id,
            req.params.bookId
        );

        res.json({ removed: true });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

async function checkout(req, res) {

    try {

        await service.checkout(req.session.user.id);

        res.json({ ok: true });

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getCart,
    addToCart,
    removeFromCart,
    checkout
};
