const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/", async (req, res) => {

    try {

        const result = await pool.query(`
            SELECT
                id,
                name
            FROM publishers
            ORDER BY name
        `);

        res.json(result.rows);

    } catch (err) {

        console.error(err);
        res.status(500).json({ error: "Database error" });

    }

});

module.exports = router;