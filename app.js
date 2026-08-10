const express = require("express");
const session = require("express-session");
const categoryRoutes = require("./routes/categories");
const publisherRoutes = require("./routes/publishers");
const bookRoutes = require("./routes/book");
const authorsRoutes = require("./routes/authors");
const searchRoutes = require("./routes/search");
const authRoutes = require("./routes/auth");
const favoritesRoutes = require("./routes/favorites");
const cartRoutes = require("./routes/cart");
const purchasesRoutes = require("./routes/purchases");
const { requireLoginPage, requireLoginApi } = require("./middleware/auth");
const { initDatabase } = require("./database/bootstrap");
const swaggerUi = require("swagger-ui-express");
const openapi = require("./docs/openapi");



const app = express();
const PORT = 3000;


app.use(express.static("public"));

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(session({
    secret: "bookmore-secret",
    resave: false,
    saveUninitialized: false
}));

app.use((req, res, next) => {

    res.locals.user = req.session.user || null;

    next();

});

app.get("/", (req, res) => {
    res.render("index");
});

const infoPages = [
    "about",
    "author",
    "contacts",
    "delivery",
    "help",
    "privacy",
    "payment",
    "terms"
];

const shopPages = [
    "looking-book",
    "new-items",
    "promotions",
    "publishers",
    "recommended",
    "sales"
];

[...infoPages, ...shopPages].forEach(page => {
    app.get(`/${page}`, (req, res) => {
        res.render(page);
    });
});


app.get("/login", (req, res) => {
    res.render("login");
});

app.get("/signup", (req, res) => {
    res.render("signup");
});

app.get("/profile", requireLoginPage, (req, res) => {
    res.render("profile");
});

app.get("/favorites", requireLoginPage, (req, res) => {
    res.render("favorites");
});

app.get("/cart", requireLoginPage, (req, res) => {
    res.render("cart");
});


app.get("/category/:name", (req, res) => {

    res.render("category", {
        category: req.params.name
    });

});

app.get("/publishers", (req, res) => {

    res.render("publishers");

});

app.get("/publishers/:slug", (req, res) => {
    res.render("publisher", {
        publisherSlug: req.params.slug
    });
});

/*app.get("/book/:id", (req, res) => {

    res.render("book", {
        id: req.params.id
    });

}); */

app.get("/book/:id", (req, res) => {
    res.render("book", {
        bookId: req.params.id
    });
});

app.get("/authors", (req, res) => {
    res.render("authors");
});

app.get("/author/:slug", (req, res) => {
    res.render("author");
});

app.get("/search", (req, res) => {

    res.render("search", {
        query: req.query.q || ""
    });

});



app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(openapi));

app.use("/api/categories", categoryRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorsRoutes);
app.use("/api/search", searchRoutes);
app.use("/auth", authRoutes);
app.use("/api/favorites", requireLoginApi, favoritesRoutes);
app.use("/api/cart", requireLoginApi, cartRoutes);
app.use("/api/purchases", requireLoginApi, purchasesRoutes);



async function start() {

    await initDatabase();

    app.listen(PORT, () => {
        console.log(`Server is running at http://localhost:${PORT}`);
    });

}

start().catch(error => {
    console.error(error);
    process.exit(1);
});

