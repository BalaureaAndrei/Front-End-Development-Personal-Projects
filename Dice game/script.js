"use strict";

const newGame = document.querySelector(".btn--new");
const roll = document.querySelector(".btn--roll");
const hold = document.querySelector(".btn--hold");
const rules = document.querySelector(".btn--rules");
const player0 = document.querySelector(".player--0");
const player1 = document.querySelector(".player--1");
const player0Score = document.querySelector("#score--0");
const player1Score = document.querySelector("#score--1");
const player0CurrentScore = document.querySelector("#current--0");
const player1CurrentScore = document.querySelector("#current--1");
const dice = document.querySelectorAll(".dice");
let playerTurn = "player1";
let diceRolled = 0;
let currentScore = 0;
let bigScore0 = 0;
let bigScore1 = 0;

const diceRoll = function () {
  let roll = Math.floor(Math.random() * 6) + 1;
  return roll;
};

const showDice = function (rolled) {
  for (let i = 0; i < dice.length; i++) {
    if (i == rolled - 1) {
      dice[i].classList.remove("hidden");
    } else {
      dice[i].classList.add("hidden");
    }
  }
};

function holdDice() {
  if (playerTurn === "player1") {
    bigScore0 = bigScore0 + currentScore;
    player0Score.textContent = bigScore0;
    player0CurrentScore.textContent = 0;
    currentScore = 0;
    player1.classList.add("playerActive");
    player0.classList.remove("playerActive");
    if (bigScore0 >= 20) {
      document.querySelector("#name--0").textContent = "WINNER";
      player0.classList.add("player--winner");
      player0.classList.remove("playerActive");
      player1.classList.remove("playerActive");
    }
    playerTurn = "player2";
  } else if (playerTurn === "player2") {
    bigScore1 = bigScore1 + currentScore;
    player1Score.textContent = bigScore1;
    player1CurrentScore.textContent = 0;
    currentScore = 0;
    player0.classList.add("playerActive");
    player1.classList.remove("playerActive");
    if (bigScore1 >= 20) {
      document.querySelector("#name--1").textContent = "WINNER";
      player1.classList.add("player--winner");
      player0.classList.remove("playerActive");
      player1.classList.remove("playerActive");
    }
    playerTurn = "player1";
  }
}

function playGame() {
  switch (playerTurn) {
    case "player1":
      if (bigScore1 >= 20 || bigScore0 >= 20) {
        break;
      }
      diceRolled = diceRoll();
      showDice(diceRolled);
      if (diceRolled > 1) {
        currentScore = currentScore + diceRolled;
        player0CurrentScore.textContent = currentScore;
      } else if (diceRolled === 1) {
        player0CurrentScore.textContent = 0;
        currentScore = 0;
        player1.classList.add("playerActive");
        player0.classList.remove("playerActive");
        playerTurn = "player2";
      }
      break;
    case "player2":
      if (bigScore1 >= 20 || bigScore0 >= 20) {
        break;
      }
      diceRolled = diceRoll();
      showDice(diceRolled);
      if (diceRolled > 1) {
        currentScore = currentScore + diceRolled;
        player1CurrentScore.textContent = currentScore;
      } else if (diceRolled === 1) {
        player1CurrentScore.textContent = 0;
        currentScore = 0;
        player0.classList.add("playerActive");
        player1.classList.remove("playerActive");
        playerTurn = "player1";
      }
      break;
    default:
      break;
  }
}

function refreshGame() {
  player0.classList.add("playerActive");
  player1.classList.remove("playerActive");
  player0.classList.remove("player--winner");
  player1.classList.remove("player--winner");
  player0Score.textContent = 0;
  player1Score.textContent = 0;
  bigScore0 = 0;
  bigScore1 = 0;
  currentScore = 0;
  document.querySelector("#name--0").textContent = "PLAYER 1";
  document.querySelector("#name--1").textContent = "PLAYER 2";
  playerTurn = "player1";
  for (i = 0; i < dice.length; i++) {
    dice[i].classList.add("hidden");
  }
}

rules.addEventListener("click", () => {
  alert(
    "First to 20 points wins \n If a player hits a 1 dice it switches to the other player and loses all current score points \n Use hold to hold you current score on the big score"
  );
});
roll.addEventListener("click", playGame);
hold.addEventListener("click", holdDice);
newGame.addEventListener("click", refreshGame);
