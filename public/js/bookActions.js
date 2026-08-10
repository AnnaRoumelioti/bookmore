function addToCart(bookId, button) {

    fetch("/api/cart", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ bookId: bookId })
    })
        .then(response => {

            if (response.status === 401) {
                window.location.href = "/login";
                return;
            }

            if (!response.ok) {
                throw new Error("Failed to add book to cart");
            }

            button.innerHTML = `
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-cart-fill" viewBox="0 0 16 16">
        <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2"/>
        </svg>
            `;

            showFavoriteMessage("Book is added to Cart", button);
            updateCartCount();

        })
        .catch(console.error);

}

async function updateCartCount() {

    try {

        const response = await fetch("/api/cart");

        if (!response.ok) {
            return;
        }

        const cartItems = await response.json();

        const count = cartItems.reduce(
            (total, item) => total + Number(item.quantity),
            0
        );

        const cartCount = document.getElementById("cart-count");

        if (cartCount) {

            if (count > 0) {
                cartCount.textContent = count;
                cartCount.style.display = "inline-flex";
            } else {
                cartCount.textContent = "";
                cartCount.style.display = "none";
            }

        }

    } catch (error) {

        console.error("Could not load cart count:", error);

    }
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
document.addEventListener("DOMContentLoaded", () => {
    updateCartCount();
});