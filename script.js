// Selecting mood buttons
const happyBtn = document.getElementById("happy");
const sadBtn = document.getElementById("sad");
const angryBtn = document.getElementById("angry");
const confusedBtn = document.getElementById("confused");
const secretMood = document.getElementById("secret-mood");

// Adding click events for each mood
happyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe57f"; // Happy yellow vibes
  secretMood.style.display = "none"; // Hide secret mood
  alert("Yay! You're happy now! 🎉");
});

sadBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#90caf9"; // Sad blue vibes
  secretMood.style.display = "none"; // Hide secret mood
  alert("Feeling blue? It's okay to cry 😢.");
});

angryBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ef9a9a"; // Angry red vibes
  secretMood.style.display = "none"; // Hide secret mood
  alert("Rage mode activated! 💢🔥");
});

confusedBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ce93d8"; // Confused purple vibes
  document.body.style.transform = "rotate(5deg)"; // Screen tilt effect
  setTimeout(() => (document.body.style.transform = "rotate(-5deg)"), 100); // Swing back
  alert("Confused? Even the screen doesn't know what's happening 🤯.");
});

// Konami Code Easter egg
let keySequence = [];
document.addEventListener("keydown", (event) => {
  const konamiCode = [
    "ArrowUp",
    "ArrowUp",
    "ArrowDown",
    "ArrowDown",
    "ArrowLeft",
    "ArrowRight",
    "ArrowLeft",
    "ArrowRight",
    "b",
    "a",
  ];

  keySequence.push(event.key);
  if (keySequence.join("").includes(konamiCode.join(""))) {
    document.body.style.backgroundColor = "#a5d6a7"; // Calm green vibes
    secretMood.style.display = "block"; // Show secret mood
    alert("Chill mode unlocked! 🧘‍♂️✨ Relax and vibe.");
    keySequence = []; // Reset sequence
  }
});
