class BookSummary {

    static authorsOf(book) {

        const authors = book.Authors || [];

        return authors
            .map(author => author.full_name)
            .sort()
            .join(", ");

    }

    static fromModel(book) {

        return {
            id: book.id,
            title: book.title,
            price: book.price,
            cover_image_url: book.cover_image_url,
            authors: BookSummary.authorsOf(book)
        };

    }

    static fromModels(books) {

        return books.map(book => BookSummary.fromModel(book));

    }

}

module.exports = BookSummary;
