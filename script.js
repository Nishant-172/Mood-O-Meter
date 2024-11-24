// Buttons ko select karna
const happyBtn = document.getElementById("happy"); // Happy mood ka button
const sadBtn = document.getElementById("sad"); // Sad mood ka button
const angryBtn = document.getElementById("angry"); // Angry mood ka button
const confusedBtn = document.getElementById("confused"); // Confused mood ka button
const secretMood = document.getElementById("secret-mood"); // Secret chill mode ka div

// Happy button pe click ka effect
happyBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#ffe57f"; // Happy yellow background
  secretMood.style.display = "none"; // Secret mood ko hide kar diya
  alert("Yay! You're happy now! 🎉"); // Pop-up message
});

// Sad button pe click ka effect
sadBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#90caf9"; // Sad blue background
  secretMood.style.display = "none"; // Secret mood ko hide kar diya
  alert("Feeling blue? It's okay to cry 😢."); // Sad message
});

// Angry button pe click ka effect
angryBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#f44336"; // Angry red background
  secretMood.style.display = "none"; // Secret mood ko hide kar diya
  alert("Rage mode activated! 😡🔥"); // Angry message
});

// Confused button pe click ka effect
confusedBtn.addEventListener("click", () => {
  document.body.style.backgroundColor = "#b39ddb"; // Confused purple background
  secretMood.style.display = "none"; // Secret mood ko hide kar diya
  alert("Confusion level: Max 🤯❓"); // Confused message
});

// Konami Code Easter egg (jo secret mood ko unlock karega)
let keySequence = []; // Sequence store karne ke liye
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
  ]; // Secret code define kiya

  keySequence.push(event.key); // Pressed key ko sequence me add karo
  if (keySequence.join("").includes(konamiCode.join(""))) {
    document.body.style.backgroundColor = "#a5d6a7"; // Chill green background
    secretMood.style.display = "block"; // Secret mood dikhana
    alert("Chill mode unlocked! 🧘‍♂️✨ Relax and vibe."); // Message for success
    keySequence = []; // Reset sequence
  }
});
