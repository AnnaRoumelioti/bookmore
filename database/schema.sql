/* Publishers */

CREATE TABLE publishers (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    country VARCHAR(100),
    website_url VARCHAR(255)
);


/* Authors */

CREATE TABLE authors (
    id SERIAL PRIMARY KEY,
    full_name VARCHAR(100) NOT NULL,
    slug VARCHAR(150) NOT NULL UNIQUE,
    biography TEXT
);

/* Categories */

CREATE TABLE categories (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE,
    description TEXT
);

/* Books */

CREATE TABLE books (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    isbn VARCHAR(20) NOT NULL UNIQUE,
    description TEXT,
    price NUMERIC(10,2) NOT NULL
        CHECK (price >= 0),
    publication_year INTEGER NOT NULL,
    book_language VARCHAR(50) NOT NULL,
    cover_image_url VARCHAR(255),
    format VARCHAR(20) NOT NULL
        CHECK (format IN ('Paperback', 'Hardcover', 'E-book')),
    stock_quantity INTEGER NOT NULL
        CHECK (stock_quantity >= 0),
    publisher_id INTEGER NOT NULL,

    FOREIGN KEY (publisher_id)
        REFERENCES publishers(id)
        ON DELETE RESTRICT
        ON UPDATE CASCADE
);

/* book_authors */

CREATE TABLE book_authors (
    book_id INTEGER NOT NULL,
    author_id INTEGER NOT NULL,

    PRIMARY KEY (book_id, author_id),

    FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (author_id)
        REFERENCES authors(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

/* book_categories */

CREATE TABLE book_categories (
    book_id INTEGER NOT NULL,
    category_id INTEGER NOT NULL,

    PRIMARY KEY (book_id, category_id),

    FOREIGN KEY (book_id)
        REFERENCES books(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE,

    FOREIGN KEY (category_id)
        REFERENCES categories(id)
        ON DELETE CASCADE
        ON UPDATE CASCADE
);

