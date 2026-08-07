function addToCart(bookId) {

    fetch("/api/cart", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId: bookId })
    })
        .then(response => {

            if (response.status === 401) {

                window.location.href = "/login";

                return;

            }

            alert("Added to cart");

        })
        .catch(console.error);

}

function toggleFavorite(bookId) {

    fetch("/api/favorites/toggle", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ bookId: bookId })
    })
        .then(response => {

            if (response.status === 401) {

                window.location.href = "/login";

                return;

            }

            if (window.location.pathname === "/favorites") {

                location.reload();

            }

        })
        .catch(console.error);

}

function removeFromCart(bookId) {

    fetch(`/api/cart/${bookId}`, {
        method: "DELETE"
    })
        .then(() => {

            location.reload();

        })
        .catch(console.error);

}

function checkout() {

    fetch("/api/cart/checkout", {
        method: "POST"
    })
        .then(() => {

            window.location.href = "/profile";

        })
        .catch(console.error);

}
