const service = require("../services/authService");

async function signup(req, res) {

    try {

        const user = await service.signup(
            req.body.full_name,
            req.body.email,
            req.body.password
        );

        if (!user) {

            return res.redirect("/signup?error=1");

        }

        req.session.user = user;

        res.redirect("/");

    } catch (err) {

        console.error(err);

        res.redirect("/signup?error=1");

    }

}

async function login(req, res) {

    try {

        const user = await service.login(
            req.body.email,
            req.body.password
        );

        if (!user) {

            return res.redirect("/login?error=1");

        }

        req.session.user = user;

        res.redirect("/");

    } catch (err) {

        console.error(err);

        res.redirect("/login?error=1");

    }

}

function logout(req, res) {

    req.session.destroy(() => {
        res.redirect("/");
    });

}

module.exports = {
    signup,
    login,
    logout
};
