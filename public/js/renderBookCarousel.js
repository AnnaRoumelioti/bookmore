function renderBookCarousel(container, books) {

    container.innerHTML = "";

    books.forEach(book => {

        const card = document.createElement("a");

        card.href = `/book/${book.id}`;
        card.className = "book-carousel-card";

        card.innerHTML = `
            <img
                src="${book.cover_image_url}"
                alt="${book.title}"
                class="book-carousel-image">

            <div class="book-carousel-info">

                <div class="book-carousel-title">
                    ${book.title}
                </div>

                <div class="book-carousel-authors">
                    ${book.authors ?? ""}
                </div>

            </div>
        `;

        container.appendChild(card);

    });
}