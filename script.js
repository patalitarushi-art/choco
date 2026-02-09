function showPopup(id) {
    document.getElementById(id).style.display = "block";

    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

window.addEventListener("click", () => {
    const music = document.getElementById("bgMusic");
    music.play().catch(() => {});
}, { once: true });
