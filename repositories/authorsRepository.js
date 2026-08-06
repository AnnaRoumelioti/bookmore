const pool = require("../config/db");

async function getAllAuthors() {
    const result = await pool.query(`
        SELECT
           id,
           full_name,
           slug,

           split_part(full_name, ' ', 1) AS first_name,
           regexp_replace(full_name, '^.* ', '') AS last_name

        FROM authors

        ORDER BY
           last_name,
           first_name;
        `);

    return result.rows;
}

async function getAuthorBySlug(slug) {
    const result = await pool.query(
        `
        SELECT
            id,
            full_name,
            biography,
            slug
        FROM authors
        WHERE slug = $1
        `,
        [slug]
    );

    return result.rows[0];
}

async function getBooksByAuthorSlug(slug) {
    const result = await pool.query(
        `
        SELECT
            b.id,
            b.title,
            b.price,
            b.cover_image_url
        FROM books b
        JOIN book_authors ba
            ON b.id = ba.book_id
        JOIN authors a
            ON ba.author_id = a.id
        WHERE a.slug = $1
        ORDER BY b.title;
        `,
        [slug]
    );

    return result.rows;
}

module.exports = {
    getAllAuthors,
    getAuthorBySlug,
    getBooksByAuthorSlug
};