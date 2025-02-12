let stage = 0; // To track how many times "Yes" has been pressed
const yesBtn = document.getElementById("yes-btn");
const noBtn = document.getElementById("no-btn");

// Function to move "No" button randomly
noBtn.addEventListener("mouseover", function () {
    let x = Math.random() * (window.innerWidth - noBtn.clientWidth);
    let y = Math.random() * (window.innerHeight - noBtn.clientHeight);
    noBtn.style.position = "absolute";
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

// Function to cycle through Yes prompts
yesBtn.addEventListener("click", function () {
    if (stage === 0) {
        document.querySelector("p").innerText = "Are you sure? 🤔";
    } else if (stage === 1) {
        document.querySelector("p").innerText = "Are you *sure sure*? 😏";
    } else if (stage === 2) {
        document.querySelector("p").innerText = "You can't take it back now! 😈💖";
        yesBtn.innerText = "Yay! 💕";
        noBtn.style.display = "none"; // Remove the "No" button
    }
    stage++;
});
