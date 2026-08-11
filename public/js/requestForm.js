const requestForm = document.getElementById("request-form");
const requestSuccess = document.getElementById("request-success");
const requestSuccessClose =
    document.getElementById("request-success-close");

requestForm.addEventListener("submit", function (event) {

    event.preventDefault();

    if (!requestForm.checkValidity()) {
        requestForm.reportValidity();
        return;
    }

    // MVP1: show success message
    requestSuccess.style.display = "flex";

    requestForm.reset();
});

requestSuccessClose.addEventListener("click", function () {
    requestSuccess.style.display = "none";
});