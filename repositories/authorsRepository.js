const { Author, Book } = require("../models");

function firstNameOf(fullName) {

    return fullName.split(" ")[0];

}

function lastNameOf(fullName) {

    return fullName.slice(fullName.lastIndexOf(" ") + 1);

}

async function getAllAuthors() {

    const authors = await Author.findAll({
        attributes: ["id", "full_name", "slug"],
        raw: true
    });

    const rows = authors.map(author => ({
        id: author.id,
        full_name: author.full_name,
        slug: author.slug,
        first_name: firstNameOf(author.full_name),
        last_name: lastNameOf(author.full_name)
    }));

    rows.sort((a, b) => {

        const byLastName = a.last_name.localeCompare(b.last_name);

        if (byLastName !== 0) {
            return byLastName;
        }

        return a.first_name.localeCompare(b.first_name);

    });

    return rows;

}

async function getAuthorBySlug(slug) {

    return await Author.findOne({
        where: { slug },
        attributes: ["id", "full_name", "biography", "slug"],
        raw: true
    });

}

async function getBooksByAuthorSlug(slug) {

    return await Book.findAll({
        attributes: ["id", "title", "price", "cover_image_url"],
        include: [
            {
                model: Author,
                where: { slug },
                attributes: [],
                through: { attributes: [] }
            }
        ],
        order: [["title", "ASC"]],
        raw: true
    });

}

module.exports = {
    getAllAuthors,
    getAuthorBySlug,
    getBooksByAuthorSlug
};
