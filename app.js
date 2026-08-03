const express = require("express");
const categoryRoutes = require("./routes/categories");
const publisherRoutes = require("./routes/publishers");
const bookRoutes = require("./routes/book");


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
    "sales",
    "search"
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

app.get("/publishers/:id", (req, res) => {

    res.render("publisher", {
        publisherId: req.params.id
    });

});


app.get("/book/:id", (req, res) => {

    res.render("book", {
        id: req.params.id
    });

});

app.get("/book/:id", (req, res) => {

    res.render("book", {
        bookId: req.params.id
    });

});



app.use("/api/categories", categoryRoutes);
app.use("/api/publishers", publisherRoutes);
app.use("/api/books", bookRoutes);



app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

