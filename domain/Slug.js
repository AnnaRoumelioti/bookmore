class Slug {

    static from(text) {

        return String(text)
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, "-")
            .replace(/^-+|-+$/g, "");

    }

}

module.exports = Slug;
