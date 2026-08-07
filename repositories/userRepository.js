const pool = require("../config/db");

async function findByEmail(email) {

    const result = await pool.query(
        `
        SELECT id, full_name, email, password_hash
        FROM users
        WHERE email = $1
        `,
        [email]
    );

    return result.rows[0];

}

async function createUser(fullName, email, passwordHash) {

    const result = await pool.query(
        `
        INSERT INTO users (full_name, email, password_hash)
        VALUES ($1, $2, $3)
        RETURNING id, full_name, email
        `,
        [fullName, email, passwordHash]
    );

    return result.rows[0];

}

module.exports = {
    findByEmail,
    createUser
};
