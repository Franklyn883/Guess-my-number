"strict mode";
//caching  the DOM
const reset = document.getElementById("reset");
//Game Levels
const levelEasy = document.getElementById("easy");
const levelNormal = document.getElementById("normal");
const levelHard = document.getElementById("hard");

//other DOM elements
let compGuess = document.getElementById("comp-guess");
let playerGuess = document.getElementById("player-input");
const checkBtn = document.getElementById("check-btn");
let display = document.getElementById("display-dashboard");
let pointsDisplay = document.getElementById("points");
let highScoreDisplay = document.getElementById("high-score");
let numOfTriesDisplay = document.getElementById("tries");
let guessMyNum = document.getElementsByClassName("guess-my-number")[0];
let gameOver = document.getElementById("game-over");
//Modal display
const modal = document.getElementById("game-modal");
const playAgainBtn = document.getElementById("play-again-btn");
const closeModal = document.getElementById("close");
let modalPoints = document.getElementById("modal-points");
let modalHighScore = document.getElementById("modal-high-score");

//State Variables
let compEasyGuess = Math.floor(Math.random() * 20) + 1;
let compNormalGuess = Math.floor(Math.random() * 50) + 1;
let compHardGuess = Math.floor(Math.random() * 100) + 1;

//updated variables
let points = 0;
let numOfTries = 10;
let highScore = 0;

//clear the inputs and displays when a mode is selected
const resetMode = function () {
  playerGuess.value = "enter number";
  numOfTries = 10;
  points = 0;
  highScore = 0;
  numOfTriesDisplay.textContent = numOfTries;
  pointsDisplay.textContent = points;
  highScoreDisplay.textContent = highScore;
  display.textContent = "Start guessing ...";
  guessMyNum.style.color = "white";
  compGuess.style.background = "white";
  playerGuess.style.borderColor = "white";
};
//clicking on window to close
window.onclick = (event) => {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

//add event too play again btn
playAgainBtn.addEventListener("click", () => {
  const modal = document.getElementById("game-modal");
  modal.style.display = "none";
  playerGuess.value = "enter number";
  numOfTries = 10;
  points = 0;
  highScore;
  numOfTriesDisplay.textContent = numOfTries;
  pointsDisplay.textContent = points;
  highScoreDisplay.textContent = highScore;

});
//close the Modal display
closeModal.onclick = () => (modal.style.display = "none");
//Victory Modal Display
const gameVictory = function () {
  gameOver.classList.add("game-win");
  const loseMssg = document.getElementById("won-or-lost");
  loseMssg.textContent = "🏆  You Won 🏆 ";
  loseMssg.style.color = "green";
  modal.style.display = "block";
  modalPoints.textContent = points;
  modalHighScore.textContent = highScore;
};

const gameDefeat = function () {
  const loseMssg = document.getElementById("won-or-lost");
  loseMssg.textContent = "You Lost";
  loseMssg.style.color = "red";
  gameOver.classList.add("game-lose");
  modal.style.display = "block";
  modalPoints.textContent = points;
  modalHighScore.textContent = highScore;
};

//On loading
window.onload = () => {
  display.textContent = "Start Guessing...";
  setTimeout(() => {
    display.textContent = `Guess between 1 and 20`;
  }, 2000);
};
//initial display to give the player the range of selection
const initialDisplay = function (minNum, maxNum) {
  display.textContent = "Start Guessing...";
  setTimeout(() => {
    display.textContent = `Guess between ${minNum} and ${maxNum}`;
  }, 2000);
};
//reset Game
reset.addEventListener("click", resetMode);

//addEventListener to the modes to update the display
const gameMode = document.getElementById("game-mode");
gameMode.addEventListener("change", (event) => {
  selectedMode = event.target.value;
  if (selectedMode == "easy") {
    resetMode();
    initialDisplay(1, 20);
  } else if (selectedMode == "normal") {
    resetMode();
    initialDisplay(1, 50);
  }
  if (selectedMode == "hard") {
    resetMode();
    initialDisplay(1, 100);
  }
});

//function for possible guess outcome

//guess error
const guessError = function (minNum, maxNum) {
  display.textContent = `🚫 Pick between ${minNum} and ${maxNum}`;
  guessMyNum.style.color = "red";
  playerGuess.style.borderColor = "red";
  points;
  numOfTries;
  highScore;
  pointsDisplay.textContent = points;
  numOfTriesDisplay.textContent = numOfTries;
  highScoreDisplay.textContent = highScore;
};
//wrong guess
const wrongGuess = function () {
  guessMyNum.style.color = "white";
  playerGuess.style.borderColor = "white";
  compGuess.style.backgroundColor = "red";
  setTimeout(() => {
    compGuess.style.backgroundColor = "white";
  }, 1000);
  points;
  numOfTries--;
  numOfTriesDisplay.textContent = numOfTries;
  pointsDisplay.textContent = points;
};

//right guess
const rightGuess = function (pointValue) {
  display.textContent = "🥳 Correct Guess";
  compGuess.style.backgroundColor = "green";
  guessMyNum.style.color = "green";
  playerGuess.style.borderColor = "white";
  points += pointValue;
  highScore;
  numOfTries;
  pointsDisplay.textContent = points;
  highScoreDisplay.textContent = highScore;
  numOfTriesDisplay.textContent = numOfTries;
  compEasyGuess = Math.floor(Math.random() * 20) + 1;
  compNormalGuess = Math.floor(Math.random() * 50) + 1;
  compHardGuess = Math.floor(Math.random() * 100) + 1;
  if (points > highScore) {
    highScore = points;
    highScoreDisplay.textContent = highScore;
  }
};

// The Different Game Modes
//Game Logic for Easy Mode
const easyGameMode = function () {
  const minNum = 1,
    maxNum = 20;

  console.log(compEasyGuess);
  let playerGuessNum = Number(playerGuess.value);
  if (!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum) {
    guessError(minNum, maxNum);
  } else if (playerGuessNum > compEasyGuess) {
    display.textContent = "📈 Too high";
    wrongGuess();
  } else if (playerGuessNum < compEasyGuess) {
    display.textContent = "📈 Too low";
    wrongGuess();
  } else if (playerGuessNum === compEasyGuess) {
    rightGuess(10);
  }
};

//Game Logic for Easy Mode
const normalGameMode = function () {
  const minNum = 1,
    maxNum = 50;

  console.log(compNormalGuess);
  let playerGuessNum = Number(playerGuess.value);
  if (!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum) {
    guessError(minNum, maxNum);
  } else if (playerGuessNum > compNormalGuess) {
    wrongGuess();
    display.textContent = "📈 Too high";
  } else if (playerGuessNum < compNormalGuess) {
    wrongGuess();
    display.textContent = "📈 Too low";
  } else if (playerGuessNum === compNormalGuess) {
    rightGuess(20);
  }
};

//Game Logic for Easy Mode
const hardGameMode = function () {
  const minNum = 1,
    maxNum = 100;

  console.log(compHardGuess);
  let playerGuessNum = Number(playerGuess.value);
  if (!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum) {
    guessError(minNum, maxNum);
  } else if (playerGuessNum > compHardGuess) {
    wrongGuess();
    display.textContent = "📈 Too high";
  } else if (playerGuessNum < compHardGuess) {
    wrongGuess();
    display.textContent = "📈 Too low";
  } else if (playerGuessNum === compHardGuess) {
    rightGuess(50);
  }
};

//Initiate Game
const gamePlay = function () {
  const selectedMode = document.getElementById("game-mode").value;

  while (numOfTries > 0) {
    if (selectedMode === "easy") {
      easyGameMode();
    } else if (selectedMode === "normal") {
      normalGameMode();
    } else if (selectedMode === "hard") {
      hardGameMode();
    }
    break;
  }
  if (numOfTries == 0 && points == 0) {
    gameDefeat();
  } else if (numOfTries == 0 && points != 0) {
    gameVictory();
  }
};

console.log(compEasyGuess);

console.log(compHardGuess);
checkBtn.addEventListener("click", gamePlay);
//addEventListener to the enter key
document.addEventListener("keydown", (event) => {
  if (event.key == "Enter") {
    gamePlay();
  }
});
