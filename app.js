const express = require("express");

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
    "category",
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

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});

