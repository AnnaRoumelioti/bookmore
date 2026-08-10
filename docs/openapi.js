const bookSummary = {
    type: "object",
    properties: {
        id: { type: "integer", example: 5 },
        title: { type: "string", example: "Honey" },
        price: { type: "string", example: "16.99" },
        cover_image_url: { type: "string", example: "images/books/honey.jpg" },
        authors: { type: "string", example: "Imani Thompson" }
    }
};

const schemas = {
    BookSummary: bookSummary,
    BookDetail: {
        type: "object",
        properties: {
            id: { type: "integer", example: 1 },
            title: { type: "string", example: "The Bloody Chamber and Other Stories" },
            isbn: { type: "string", example: "9781784878689" },
            description: { type: "string" },
            price: { type: "string", example: "14.99" },
            publication_year: { type: "integer", example: 2018 },
            book_language: { type: "string", example: "English" },
            format: { type: "string", enum: ["Paperback", "Hardcover", "E-book", "E-books", "Comic"] },
            stock_quantity: { type: "integer", example: 20 },
            cover_image_url: { type: "string" },
            publisher_name: { type: "string", example: "Vintage Classics" },
            publisher_slug: { type: "string", example: "vintage-classics" },
            authors: { type: "string", example: "Angela Carter" },
            author_slug: { type: "string", example: "angela-carter" }
        }
    },
    BookWithoutAuthors: {
        type: "object",
        properties: {
            id: { type: "integer" },
            title: { type: "string" },
            price: { type: "string" },
            cover_image_url: { type: "string" }
        }
    },
    AuthorListItem: {
        type: "object",
        properties: {
            id: { type: "integer", example: 1 },
            full_name: { type: "string", example: "George Orwell" },
            slug: { type: "string", example: "george-orwell" },
            first_name: { type: "string", example: "George" },
            last_name: { type: "string", example: "Orwell" }
        }
    },
    Author: {
        type: "object",
        properties: {
            id: { type: "integer", example: 1 },
            full_name: { type: "string", example: "George Orwell" },
            biography: { type: "string" },
            slug: { type: "string", example: "george-orwell" }
        }
    },
    Publisher: {
        type: "object",
        properties: {
            id: { type: "integer", example: 3 },
            name: { type: "string", example: "Vintage Classics" },
            slug: { type: "string", example: "vintage-classics" },
            country: { type: "string", example: "United Kingdom" },
            website_url: { type: "string" }
        }
    },
    PublisherWithBooks: {
        type: "object",
        properties: {
            publisher: { $ref: "#/components/schemas/Publisher" },
            books: { type: "array", items: bookSummary }
        }
    },
    CartItem: {
        type: "object",
        properties: {
            id: { type: "integer", description: "The book id", example: 5 },
            title: { type: "string", example: "Honey" },
            price: { type: "string", example: "16.99" },
            cover_image_url: { type: "string" },
            quantity: { type: "integer", example: 2 }
        }
    },
    Purchase: {
        type: "object",
        properties: {
            id: { type: "integer", description: "The purchase id", example: 1 },
            quantity: { type: "integer", example: 2 },
            price: { type: "string", description: "The price the book had at checkout", example: "16.99" },
            purchased_at: { type: "string", format: "date-time" },
            book_id: { type: "integer", example: 5 },
            title: { type: "string", example: "Honey" },
            cover_image_url: { type: "string" }
        }
    },
    Error: {
        type: "object",
        properties: {
            error: { type: "string", example: "Internal server error" }
        }
    }
};

const notLoggedIn = {
    description: "Not logged in",
    content: {
        "application/json": {
            schema: { $ref: "#/components/schemas/Error" },
            example: { error: "Not logged in" }
        }
    }
};

const serverError = {
    description: "Internal server error",
    content: {
        "application/json": { schema: { $ref: "#/components/schemas/Error" } }
    }
};

function jsonArray(description, ref) {
    return {
        description,
        content: {
            "application/json": {
                schema: { type: "array", items: { $ref: "#/components/schemas/" + ref } }
            }
        }
    };
}

function jsonObject(description, ref) {
    return {
        description,
        content: {
            "application/json": { schema: { $ref: "#/components/schemas/" + ref } }
        }
    };
}

function redirect(description) {
    return { description };
}

const openapi = {
    openapi: "3.0.3",
    info: {
        title: "Bookmore API",
        version: "1.0.0",
        description: "The HTTP API behind the Bookmore online bookstore. The catalogue endpoints are public. The favourites, cart and purchases endpoints need a logged in session, which is created by the auth endpoints and carried in a session cookie."
    },
    servers: [
        { url: "http://localhost:3000", description: "Local development" }
    ],
    tags: [
        { name: "Books", description: "The book catalogue" },
        { name: "Categories", description: "Books grouped by category" },
        { name: "Authors", description: "Authors and their books" },
        { name: "Publishers", description: "Publishers and their books" },
        { name: "Search", description: "Search by title, author or ISBN" },
        { name: "Auth", description: "Signup, login and logout" },
        { name: "Favorites", description: "The signed in user's favourite books" },
        { name: "Cart", description: "The signed in user's shopping cart" },
        { name: "Purchases", description: "What the signed in user has bought" }
    ],
    components: {
        schemas,
        securitySchemes: {
            sessionCookie: {
                type: "apiKey",
                in: "cookie",
                name: "connect.sid",
                description: "There is nothing to fill in here. Browsers do not let a page set the Cookie header, so anything typed in this box is ignored. To call the endpoints marked with a padlock, log in at /login in this same browser and then come back. This page is served from the same address as the API, so the browser sends your session cookie on its own."
            }
        }
    },
    paths: {
        "/api/books/latest": {
            get: {
                tags: ["Books"],
                summary: "The 20 most recently added books",
                responses: {
                    200: jsonArray("The latest books", "BookSummary"),
                    500: serverError
                }
            }
        },
        "/api/books/recommended": {
            get: {
                tags: ["Books"],
                summary: "The 20 most viewed books",
                responses: {
                    200: jsonArray("The recommended books", "BookSummary"),
                    500: serverError
                }
            }
        },
        "/api/books/{id}": {
            get: {
                tags: ["Books"],
                summary: "One book with its publisher and authors",
                description: "Viewing a book increases its view count, which is what drives the recommended list.",
                parameters: [
                    { name: "id", in: "path", required: true, schema: { type: "integer" }, example: 1 }
                ],
                responses: {
                    200: jsonObject("The book", "BookDetail"),
                    404: jsonObject("Book not found", "Error"),
                    500: serverError
                }
            }
        },
        "/api/categories/{name}": {
            get: {
                tags: ["Categories"],
                summary: "Every book in a category",
                parameters: [
                    {
                        name: "name",
                        in: "path",
                        required: true,
                        schema: {
                            type: "string",
                            enum: ["Fiction", "Non-fiction", "Children's Books", "Business", "Medicine", "Programming", "E-books", "Comic Books"]
                        },
                        example: "Fiction"
                    }
                ],
                responses: {
                    200: jsonArray("The books in that category, empty if the category is unknown", "BookSummary"),
                    500: serverError
                }
            }
        },
        "/api/authors": {
            get: {
                tags: ["Authors"],
                summary: "Every author, sorted by last name",
                responses: {
                    200: jsonArray("The authors", "AuthorListItem"),
                    500: serverError
                }
            }
        },
        "/api/authors/{slug}": {
            get: {
                tags: ["Authors"],
                summary: "One author with their biography",
                parameters: [
                    { name: "slug", in: "path", required: true, schema: { type: "string" }, example: "george-orwell" }
                ],
                responses: {
                    200: jsonObject("The author", "Author"),
                    404: jsonObject("Author not found", "Error"),
                    500: serverError
                }
            }
        },
        "/api/authors/{slug}/books": {
            get: {
                tags: ["Authors"],
                summary: "The books written by one author",
                parameters: [
                    { name: "slug", in: "path", required: true, schema: { type: "string" }, example: "angela-carter" }
                ],
                responses: {
                    200: jsonArray("The author's books", "BookWithoutAuthors"),
                    500: serverError
                }
            }
        },
        "/api/publishers": {
            get: {
                tags: ["Publishers"],
                summary: "Every publisher, sorted by name",
                responses: {
                    200: jsonArray("The publishers", "Publisher"),
                    500: serverError
                }
            }
        },
        "/api/publishers/{slug}": {
            get: {
                tags: ["Publishers"],
                summary: "One publisher together with its books",
                parameters: [
                    { name: "slug", in: "path", required: true, schema: { type: "string" }, example: "vintage-classics" }
                ],
                responses: {
                    200: jsonObject("The publisher and its books", "PublisherWithBooks"),
                    500: serverError
                }
            }
        },
        "/api/search": {
            get: {
                tags: ["Search"],
                summary: "Search books by title, author name or ISBN",
                parameters: [
                    {
                        name: "q",
                        in: "query",
                        required: false,
                        schema: { type: "string" },
                        description: "An empty or missing term returns an empty list without touching the database.",
                        example: "clean"
                    }
                ],
                responses: {
                    200: jsonArray("The matching books", "BookSummary"),
                    500: serverError
                }
            }
        },
        "/auth/signup": {
            post: {
                tags: ["Auth"],
                summary: "Create an account and start a session",
                description: "This is a browser form endpoint, so it answers with a redirect rather than JSON. On success it redirects to / with the new session set. If the email is already registered it redirects to /signup?error=1.",
                requestBody: {
                    required: true,
                    content: {
                        "application/x-www-form-urlencoded": {
                            schema: {
                                type: "object",
                                required: ["full_name", "email", "password"],
                                properties: {
                                    full_name: { type: "string", example: "Anna Roumelioti" },
                                    email: { type: "string", format: "email", example: "anna@example.com" },
                                    password: { type: "string", format: "password", example: "pw123456" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    302: redirect("Redirect to / when signed up, or to /signup?error=1 when the email is taken")
                }
            }
        },
        "/auth/login": {
            post: {
                tags: ["Auth"],
                summary: "Log in and start a session",
                description: "Answers with a redirect. On success it redirects to /, otherwise to /login?error=1.",
                requestBody: {
                    required: true,
                    content: {
                        "application/x-www-form-urlencoded": {
                            schema: {
                                type: "object",
                                required: ["email", "password"],
                                properties: {
                                    email: { type: "string", format: "email", example: "anna@example.com" },
                                    password: { type: "string", format: "password", example: "pw123456" }
                                }
                            }
                        }
                    }
                },
                responses: {
                    302: redirect("Redirect to / when the details are right, or to /login?error=1 when they are not")
                }
            }
        },
        "/auth/logout": {
            get: {
                tags: ["Auth"],
                summary: "End the session",
                responses: {
                    302: redirect("Redirect to /")
                }
            }
        },
        "/api/favorites": {
            get: {
                tags: ["Favorites"],
                summary: "The books the user has favourited",
                security: [{ sessionCookie: [] }],
                responses: {
                    200: jsonArray("The favourite books", "BookSummary"),
                    401: notLoggedIn,
                    500: serverError
                }
            }
        },
        "/api/favorites/toggle": {
            post: {
                tags: ["Favorites"],
                summary: "Add a book to favourites, or remove it if it is already there",
                security: [{ sessionCookie: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: ["bookId"],
                                properties: { bookId: { type: "integer", example: 5 } }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "Whether the book is a favourite after the toggle",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: { favorited: { type: "boolean", example: true } }
                                }
                            }
                        }
                    },
                    401: notLoggedIn,
                    500: serverError
                }
            }
        },
        "/api/cart": {
            get: {
                tags: ["Cart"],
                summary: "What is in the cart",
                security: [{ sessionCookie: [] }],
                responses: {
                    200: jsonArray("The cart lines", "CartItem"),
                    401: notLoggedIn,
                    500: serverError
                }
            },
            post: {
                tags: ["Cart"],
                summary: "Add a book to the cart",
                description: "Adding a book that is already in the cart increases its quantity instead of creating a second line.",
                security: [{ sessionCookie: [] }],
                requestBody: {
                    required: true,
                    content: {
                        "application/json": {
                            schema: {
                                type: "object",
                                required: ["bookId"],
                                properties: { bookId: { type: "integer", example: 5 } }
                            }
                        }
                    }
                },
                responses: {
                    200: {
                        description: "The book was added",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: { added: { type: "boolean", example: true } }
                                }
                            }
                        }
                    },
                    401: notLoggedIn,
                    500: serverError
                }
            }
        },
        "/api/cart/{bookId}": {
            delete: {
                tags: ["Cart"],
                summary: "Remove a book from the cart",
                security: [{ sessionCookie: [] }],
                parameters: [
                    { name: "bookId", in: "path", required: true, schema: { type: "integer" }, example: 5 }
                ],
                responses: {
                    200: {
                        description: "The book was removed",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: { removed: { type: "boolean", example: true } }
                                }
                            }
                        }
                    },
                    401: notLoggedIn,
                    500: serverError
                }
            }
        },
        "/api/cart/checkout": {
            post: {
                tags: ["Cart"],
                summary: "Buy everything in the cart",
                description: "Turns every cart line into a purchase, recording the price each book has right now, then empties the cart.",
                security: [{ sessionCookie: [] }],
                responses: {
                    200: {
                        description: "The purchase was recorded and the cart is empty",
                        content: {
                            "application/json": {
                                schema: {
                                    type: "object",
                                    properties: { ok: { type: "boolean", example: true } }
                                }
                            }
                        }
                    },
                    401: notLoggedIn,
                    500: serverError
                }
            }
        },
        "/api/purchases": {
            get: {
                tags: ["Purchases"],
                summary: "Everything the user has bought, newest first",
                security: [{ sessionCookie: [] }],
                responses: {
                    200: jsonArray("The purchases", "Purchase"),
                    401: notLoggedIn,
                    500: serverError
                }
            }
        }
    }
};

module.exports = openapi;
