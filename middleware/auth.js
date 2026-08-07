function requireLoginPage(req, res, next) {

    if (!req.session.user) {

        return res.redirect("/login");

    }

    next();

}

function requireLoginApi(req, res, next) {

    if (!req.session.user) {

        return res.status(401).json({
            error: "Not logged in"
        });

    }

    next();

}

module.exports = {
    requireLoginPage,
    requireLoginApi
};
