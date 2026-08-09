async function renderBooks(container, books) {

    container.innerHTML = "";

    let html = "";

    let favoriteIds = new Set();

try {

    const response = await fetch("/api/favorites");

    if (response.ok) {

        const favorites = await response.json();

        favoriteIds = new Set(
            favorites.map(book => book.id)
        );

    }

} catch (error) {

    console.error("Could not load favorites:", error);

}

books.forEach(book => {

    const isFavorite = favoriteIds.has(book.id);

    const heartIcon = isFavorite
    ? `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-suit-heart-fill"
            viewBox="0 0 16 16">

            <path
                d="M8 1.314C3.535-3.155-3.64 3.002 2.135 8.777L8 14.5l5.865-5.723C19.64 3.002 12.465-3.155 8 1.314"/>
        </svg>
    `
    : `
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            fill="currentColor"
            class="bi bi-suit-heart"
            viewBox="0 0 16 16">

            <path
                d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.837-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143 7.89 1.2 7.946 1.29 8 1.386a.87.87 0 0 1 .176-.243C12.72-3.042 23.333 4.868 8 15"/>
        </svg>
    `;

        html += `
            <div class="col-12 col-sm-6 col-lg-4 col-xl-3">

                <div class="card h-100 shadow-sm">

                    <a href="/book/${book.id}" class="book-link">

                        <img
                            src="/${book.cover_image_url}"
                            class="books-img"
                            alt="${book.title}">

                    </a>

                    <div class="card-body d-flex flex-column">

                        <a href="/book/${book.id}" class="book-link">

                            <h5 class="card-title">
                                ${book.title}
                            </h5>

                        </a>

                        <p class="text-muted">
                            ${book.authors}
                        </p>

                        <div class="mt-auto card-footer-row">

                            <span class="book-price">
                                €${book.price}
                            </span>

                            <div class="book-actions">

                                <button
                                    class="card-icons"
                                    data-book-id="${book.id}"
                                    onclick="toggleFavorite(${book.id}, this)">

                                    ${heartIcon}

                                </button>

                                <button
                                    class="card-icons"
                                    data-book-id="${book.id}"
                                    onclick="addToCart(${book.id})">

                                    <svg xmlns="http://www.w3.org/2000/svg"
                                         width="20"
                                         height="20"
                                         fill="currentColor"
                                         class="bi bi-cart"
                                         viewBox="0 0 16 16">

                                        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>

                                    </svg>

                                </button>

                            </div>

                        </div>

                    </div>

                </div>

            </div>
        `;

    });

    container.innerHTML = html;

}