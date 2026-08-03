const service = require("../services/publisherService");

async function getAllPublishers(req, res) {

    try {

        const publishers =
            await service.getAllPublishers();

        res.json(publishers);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getAllPublishers
};