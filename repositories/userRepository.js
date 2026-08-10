const { User } = require("../models");

async function findByEmail(email) {

    return await User.findOne({
        where: { email },
        attributes: ["id", "full_name", "email", "password_hash"],
        raw: true
    });

}

async function createUser(fullName, email, passwordHash) {

    const user = await User.create({
        full_name: fullName,
        email: email,
        password_hash: passwordHash
    });

    return {
        id: user.id,
        full_name: user.full_name,
        email: user.email
    };

}

module.exports = {
    findByEmail,
    createUser
};
