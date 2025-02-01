document.addEventListener("DOMContentLoaded", function () {
    const menuButton = document.getElementById("menu-button");
    const nav = document.querySelector("nav ul");

    menuButton.addEventListener("click", function () {
        nav.classList.toggle("visible");
    });
});
