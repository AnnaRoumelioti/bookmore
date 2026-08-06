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

async function getPublisher(req, res) {

    try {

        const publisher =
            await service.getPublisherWithBooks(req.params.slug);

        res.json(publisher);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Internal server error"
        });

    }

}

module.exports = {
    getAllPublishers,
    getPublisher
};