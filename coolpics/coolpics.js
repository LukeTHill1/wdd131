const menuButton = document.querySelector("#menu-button");
const menu = document.querySelector("nav ul");

function toggleMenu() {
    menu.classList.toggle("hide");
}

menuButton.addEventListener("click", toggleMenu);
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide"); // Show menu on larger screens
    } else {
        menu.classList.add("hide"); // Hide menu on small screens
    }
}

// Call immediately on page load
handleResize();
window.addEventListener("resize", handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        let imgSrc = event.target.src.split("-")[0] + "-full.jpeg"; // Adjust this based on your file naming convention
        let viewerHTML = viewerTemplate(imgSrc, event.target.alt);
        document.body.insertAdjacentHTML("afterbegin", viewerHTML);

        // Add close event to the new modal
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

// Attach event listener to gallery section
document.querySelector(".gallery").addEventListener("click", viewHandler);