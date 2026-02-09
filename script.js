// Popup system
function showPopup(id) {
    document.getElementById(id).classList.add("show");
}
function closePopup(id) {
    document.getElementById(id).classList.remove("show");
}

// Floating hearts generator
setInterval(() => {
    let heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "💗";
    heart.style.left = Math.random() * window.innerWidth + "px";
    heart.style.fontSize = (20 + Math.random()*20) + "px";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 4000);
}, 500);
