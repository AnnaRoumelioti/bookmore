const { sequelize, ensureDatabaseExists } = require("../config/database");
const { seedDatabase } = require("./seed");

async function reset() {

    await ensureDatabaseExists();

    await sequelize.sync({ force: true });

    await seedDatabase();

    await sequelize.close();

}

reset().catch(error => {
    console.error(error);
    process.exit(1);
});
