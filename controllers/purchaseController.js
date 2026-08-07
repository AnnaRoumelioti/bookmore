const service = require("../services/purchaseService");

async function getPurchases(req, res) {

    try {

        const purchases =
            await service.getPurchases(req.session.user.id);

        res.json(purchases);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getPurchases
};
