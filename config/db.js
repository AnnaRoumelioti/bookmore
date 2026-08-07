require("dotenv").config({ quiet: true });

const { Pool } = require("pg");

const pool = new Pool({
    user: "postgres",
    host: "localhost",
    database: "bookmore",
    password: process.env.DB_PASSWORD || "bookmore",
    port: 5432
});

module.exports = pool;
