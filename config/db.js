const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "bookmore",
    password: "bookmore",
    port: 5432
});

module.exports = pool;