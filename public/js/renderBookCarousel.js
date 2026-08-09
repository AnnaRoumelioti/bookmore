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

function initBookSlider(track) {

    const slider =
        track.closest(".book-carousel");

    const prevButton =
        slider.querySelector(".book-slider-prev");

    const nextButton =
        slider.querySelector(".book-slider-next");

    const card =
        track.querySelector(".book-carousel-card");

    if (!card) {
        return;
    }

    const gap = 15;

    const getCardWidth = () => {

        return card.getBoundingClientRect().width + gap;

    };

    nextButton.addEventListener("click", () => {

        track.scrollBy({
            left: getCardWidth(),
            behavior: "smooth"
        });

    });

    prevButton.addEventListener("click", () => {

        track.scrollBy({
            left: -getCardWidth(),
            behavior: "smooth"
        });

    });


    let autoScroll;


    function startAutoScroll() {

        autoScroll = setInterval(() => {

            const maxScroll =
                track.scrollWidth - track.clientWidth;

            if (track.scrollLeft >= maxScroll - 5) {

                track.scrollTo({
                    left: 0,
                    behavior: "smooth"
                });

            } else {

                track.scrollBy({
                    left: getCardWidth(),
                    behavior: "smooth"
                });

            }

        }, 2000);

    }


    function stopAutoScroll() {

        clearInterval(autoScroll);

    }


    slider.addEventListener(
        "mouseenter",
        stopAutoScroll
    );

    slider.addEventListener(
        "mouseleave",
        startAutoScroll
    );


    startAutoScroll();

}