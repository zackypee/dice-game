const imageFolder = [
  "images/dice1.png",
  "images/dice2.png",
  "images/dice3.png",
  "images/dice4.png",
  "images/dice5.png",
  "images/dice6.png"
];

const image1 = document.querySelector(".img1");
const image2 = document.querySelector(".img2");
const rollBtn = document.getElementById("roll");
const resetBtn = document.getElementById("reset");
const h1Element = document.querySelector("h1");

// Roll Dice Button Click
rollBtn.addEventListener("click", function () {
  let random1 = Math.floor(Math.random() * 6);
  let random2 = Math.floor(Math.random() * 6);

  image1.src = imageFolder[random1];
  image2.src = imageFolder[random2];

  let resultOne = random1 + 1;
  let resultTwo = random2 + 1;

  if (resultOne > resultTwo) {
    h1Element.textContent = "🚩 Player 1 Wins!";
  } else if (resultOne < resultTwo) {
    h1Element.textContent = "Player 2 Wins! 🚩";
  } else {
    h1Element.textContent = "It's a draw!";
  }
});

// Reset Button Click
resetBtn.addEventListener("click", function () {
  image1.src = "images/dice6.png";
  image2.src = "images/dice6.png";
  h1Element.textContent = "Let’s Play Dice";
});
