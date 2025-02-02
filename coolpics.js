const menuButton = document.getElementById("menu");
const menuList = document.querySelector("nav ul");

menuButton.addEventListener("click", () => {
    menuList.classList.toggle("show");
});

function handleResize() {
    if (window.innerWidth > 1000) {
        menuList.classList.remove("show");
    }
}
window.addEventListener("resize", handleResize);
handleResize();

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
        <button class="close-viewer">X</button>
        <img src="${pic}" alt="${alt}">
    </div>`;
}

function viewHandler(event) {
    if (event.target.tagName === "IMG") {
        const src = event.target.src.replace("-sm", "-full");
        const alt = event.target.alt;
        document.body.insertAdjacentHTML("afterbegin", viewerTemplate(src, alt));
        document.querySelector(".close-viewer").addEventListener("click", closeViewer);
    }
}

function closeViewer() {
    document.querySelector(".viewer").remove();
}

document.querySelector(".gallery").addEventListener("click", viewHandler);
