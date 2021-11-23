"use strict";
let randomNumber = Math.floor(Math.random() * 19) + 1;
let score = 20;

document.querySelector(".check").addEventListener("click", () => {
  const guess = Number(document.querySelector(".guess").value);
  const message = document.querySelector(".message");
  if (!guess || guess > 20) {
    message.textContent = "🤢No number or not in the 1-20 interval";
  } else if (guess === randomNumber) {
    message.textContent = "You won ✔";
    document.querySelector("body").style.backgroundColor = "green";
    document.querySelector(".number").style.width = "30rem";
    document.querySelector(".number").textContent = guess;
    if (score > document.querySelector(".highscore").textContent) {
      document.querySelector(".highscore").textContent = score;
    }
  } else if (guess !== randomNumber) {
    if (score > 1) {
      message.textContent = guess > randomNumber ? "Too high 🤦‍♂️" : "Too low 🤦‍♂️";
      score--;
      document.querySelector(".score").textContent = score;
    } else {
      message.textContent = "You lost 🤣";
      document.querySelector(".score").textContent = "0";
    }
  }
});

document.querySelector(".again").addEventListener("click", () => {
  document.querySelector(".message").textContent = "Start guessing";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  score = 20;
  document.querySelector(".score").textContent = score;
  randomNumber = Math.floor(Math.random() * 19) + 1;
  document.querySelector(".guess").value = "";
});
