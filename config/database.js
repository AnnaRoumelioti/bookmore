require("dotenv").config({ quiet: true });

const { Sequelize } = require("sequelize");
const { Client } = require("pg");

const config = {
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME || "bookmore",
    username: process.env.DB_USER || "postgres",
    password: process.env.DB_PASSWORD || "bookmore"
};

async function ensureDatabaseExists() {

    const client = new Client({
        host: config.host,
        port: config.port,
        user: config.username,
        password: config.password,
        database: "postgres"
    });

    try {

        await client.connect();

        const result = await client.query(
            "SELECT 1 FROM pg_database WHERE datname = $1",
            [config.database]
        );

        if (result.rows.length === 0) {

            await client.query(`CREATE DATABASE "${config.database}"`);

            console.log(`Created database "${config.database}"`);

        }

    } catch (error) {

        console.error(`Could not create the database "${config.database}" automatically. Create it in pgAdmin and start the app again.`);

        throw error;

    } finally {

        await client.end();

    }

}

const sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    port: config.port,
    dialect: "postgres",
    logging: false,
    define: {
        underscored: true,
        timestamps: false,
        freezeTableName: true
    }
});

module.exports = {
    sequelize,
    ensureDatabaseExists,
    config
};
