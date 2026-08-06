const express = require("express");
const categoryRoutes = require("./routes/categories");
const publisherRoutes = require("./routes/publishers");
const bookRoutes = require("./routes/book");
const authorsRoutes = require("./routes/authors");
const searchRoutes = require("./routes/search");



const app = express();
const PORT = 3000;


app.use(express.static("public"));

app.set("view engine", "ejs");

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
    "cart",
    "favorites",
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



app.use("/api/categories", categoryRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/books", bookRoutes);
app.use("/api/authors", authorsRoutes);
app.use("/api/search", searchRoutes);



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

