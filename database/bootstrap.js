const { DataTypes } = require("sequelize");
const { sequelize, ensureDatabaseExists } = require("../config/database");
const { seedDatabase } = require("./seed");

const missingColumns = [
    {
        table: "books",
        column: "view_count",
        definition: {
            type: DataTypes.INTEGER,
            allowNull: false,
            defaultValue: 0
        }
    }
];

async function addMissingColumns() {

    const queryInterface = sequelize.getQueryInterface();

    for (const entry of missingColumns) {

        const existing = await queryInterface.describeTable(entry.table);

        if (!existing[entry.column]) {

            await queryInterface.addColumn(entry.table, entry.column, entry.definition);

            console.log(`Added the missing column ${entry.table}.${entry.column}`);

        }

    }

}

async function initDatabase() {

    await ensureDatabaseExists();

    await sequelize.authenticate();

    await sequelize.sync();

    await addMissingColumns();

    await seedDatabase();

}

module.exports = {
    initDatabase
};
