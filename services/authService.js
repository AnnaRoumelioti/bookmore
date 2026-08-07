const bcrypt = require("bcryptjs");
const repository = require("../repositories/userRepository");

async function signup(fullName, email, password) {

    const existing = await repository.findByEmail(email);

    if (existing) {

        return null;

    }

    const passwordHash = await bcrypt.hash(password, 10);

    return await repository.createUser(fullName, email, passwordHash);

}

async function login(email, password) {

    const user = await repository.findByEmail(email);

    if (!user) {

        return null;

    }

    const match = await bcrypt.compare(password, user.password_hash);

    if (!match) {

        return null;

    }

    return {
        id: user.id,
        full_name: user.full_name,
        email: user.email
    };

}

module.exports = {
    signup,
    login
};
