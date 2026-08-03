const pool = require("../config/db");

async function getAllPublishers() {

    const result = await pool.query(`
        SELECT
            id,
            name,
            country,
            website_url
        FROM publishers
        ORDER BY name
    `);

    return result.rows;
}

module.exports = {
    getAllPublishers
};