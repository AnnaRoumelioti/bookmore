async function toggleFavorite(bookId, button) {

    try {

        const response = await fetch(
            "/api/favorites/toggle",
            {
                method: "POST",

                headers: {
                    "Content-Type": "application/json"
                },

                body: JSON.stringify({
                    bookId: bookId
                })
            }
        );


if (!response.ok) {

    if (response.status === 401) {
        window.location.href = "/login";
        return;
    }

    throw new Error(
        "Failed to update favorites"
    );

}


        const data = await response.json();


        if (data.favorited) {
    
            if (button && button.classList.contains("card-icons")) {

            button.innerHTML = `
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
            `;
            }

            showFavoriteMessage(
                "Book is added to Favorites",
                button
            );

        } else {

            if (button && button.classList.contains("card-icons")) {

            button.innerHTML = `
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
            }

            showFavoriteMessage(
                "Book is removed from Favorites",
                button
            );


            const favoritesList = button.closest(
                '[data-favorites-list="true"]'
            );

            if (favoritesList) {

                const bookCard = button.closest(
                    ".col-12"
                );

                if (bookCard) {
                    bookCard.remove();
                }
            }

        }

    } catch (error) {

        console.error(error);

    }

}


function showFavoriteMessage(message, button) {

    const messageElement =
        document.getElementById("favorite-message");

    messageElement.textContent = message;

    const rect = button.getBoundingClientRect();

    messageElement.style.left =
        `${rect.left + window.scrollX}px`;

    messageElement.style.top =
        `${rect.bottom + window.scrollY + 8}px`;

    messageElement.classList.add("show");


    setTimeout(() => {

        messageElement.classList.remove("show");

    }, 2000);

}