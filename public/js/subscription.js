const subscriptionForm =
    document.getElementById("subscription-form");

const subscribeButton =
    document.getElementById("subscribe-button");

subscriptionForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!subscriptionForm.checkValidity()) {
        subscriptionForm.reportValidity();
        return;
    }

    showSubscriptionMessage(
    "You're subscribed to our newsletter!"
);

    subscriptionForm.reset();
});

function showSubscriptionMessage(message) {
    const toast = document.createElement("div");

    toast.className = "subscription-toast";
    toast.textContent = message;

    document.body.appendChild(toast);

    const button = document.getElementById("subscribe-button");
    const rect = button.getBoundingClientRect();

    toast.style.position = "fixed";
    toast.style.left = `${rect.left}px`;
    toast.style.top = `${rect.top - toast.offsetHeight - 10}px`;

    setTimeout(() => {
        toast.remove();
    }, 3000);
}