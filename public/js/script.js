document.addEventListener("click", function (event) {
    const navbar = document.querySelector(".navbar");

    if (!navbar.contains(event.target)) {
        document.querySelectorAll(".collapse.show").forEach(function (element) {
            bootstrap.Collapse.getOrCreateInstance(element).hide();
        });
    }
});

document.querySelectorAll(".nav-main a, .mobile-sidebar a").forEach(link => {
    link.addEventListener("click", () => {
        document.querySelectorAll(".collapse.show").forEach(menu => {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        });
    });
});