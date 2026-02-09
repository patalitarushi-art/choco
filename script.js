// POPUP FUNCTIONS
function showPopup(id) {
    document.getElementById(id).style.display = "block";

    // Try playing music on button click
    const music = document.getElementById("bgMusic");
    music.volume = 1.0;
    music.play().catch(() => {});
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
}

// ENABLE MUSIC ON FIRST USER INTERACTION
window.addEventListener("click", function enableAudio() {
    const music = document.getElementById("bgMusic");

    music.play().then(() => {
        console.log("Music started after user interaction");
    }).catch(err => {
        console.log("Autoplay still blocked:", err);
    });

    // Remove event listener after first successful play
    window.removeEventListener("click", enableAudio);
});
