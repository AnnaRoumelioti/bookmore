const express = require("express");
const router = express.Router();
const pool = require("../config/db");

router.get("/:name", async (req, res) => {

    try {

        const category = req.params.name;

        const result = await pool.query(
            `
            SELECT
                b.id,
                b.title,
                b.price,
                b.cover_image_url,
                STRING_AGG(a.full_name, ', ') AS authors
            FROM books b
            JOIN book_categories bc
                ON b.id = bc.book_id
            JOIN categories c
                ON bc.category_id = c.id
            JOIN book_authors ba
                ON b.id = ba.book_id
            JOIN authors a
                ON ba.author_id = a.id
            WHERE LOWER(c.name) = LOWER($1)
            GROUP BY
                b.id,
                b.title,
                b.price,
                b.cover_image_url
            ORDER BY b.title;
            `,
            [category]
        );

        res.json(result.rows);

    } catch (err) {

        console.error(err);

        res.status(500).json({
            error: "Database error"
        });

    }

});

module.exports = router;