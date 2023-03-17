//cache the DOM
const reset = document.getElementsByClassName('reset');
//Game Levels
const levelEasy = document.getElementById('easy');
const levelNormal = document.getElementById('normal');
const levelHard = document.getElementById('hard');


let compGuess = document.getElementById('comp-guess');
let playerGuess = document.getElementById('player-input');
const checkBtn = document.getElementById('check-btn');
let display = document.getElementById('display-dashboard');
let pointsDisplay = document.getElementById('points');
let highScoreDisplay = document.getElementById('high-score');
let numOfTriesDisplay = document.getElementById('tries')


//State Variables
 const compEasyGuess = Math.floor(Math.random()*20)+1;
 const compNormalGuess = Math.floor(Math.random()*50)+1;
 const compHardGuess = Math.floor(Math.random()*50)+1;
let points = 0;
let numOfTries = 10;
let highScore = 0;

 //function for possible guess outcome
 const wrongGuess = function(){
  compGuess.style.backgroundColor = 'red';
  points; numOfTries --;
  numOfTriesDisplay.textContent= numOfTries
  
 }

 //Game Logic for Easy Mode
const easyGameMode = function(){
  
  const minNum = 1, maxNum =20;
  
 
  let playerGuessNum = Number(playerGuess.value);
  if(!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum){
    display.textContent = "🚫 Pick between 1 and 20";
    playerGuess.style.borderColor = 'red';
    points; numOfTries;  highScore;
   
    
  }
  else if(playerGuessNum > compEasyGuess){
    display.textContent ="📈 Too high";
   wrongGuess();
  }
  else if(playerGuessNum < compEasyGuess){
    display.textContent ="📈 Too low"
   wrongGuess();
  }
  else if(playerGuessNum === compEasyGuess){
    display.textContent = '🥳 Correct Guess you Win'
    compGuess.style.backgroundColor = 'green'
    console.log(display.textContent)
    points+=10
    pointsDisplay.textContent=points
  }
  
 
 
}

const normalGameMode = function(){
  const minNum = 1, maxNum = 50;
  
  console.log(display)
  let playerGuessNum = Number(playerGuess.value);
  if(!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum){
    display.textContent = "🚫 Pick between 1 and 50";
    playerGuess.style.borderColor = 'red';
    points; numOfTries;  highScore;
    
    
  }
  else if(playerGuessNum > compEasyGuess){
    display.textContent ="📈 Too high";
   wrongGuess();
  }
  else if(playerGuessNum < compEasyGuess){
    display.textContent ="📈 Too low"
   wrongGuess();
  }
  else if(playerGuessNum === compEasyGuess){
    display.textContent = '🥳 Correct Guess you Win'
    compGuess.style.backgroundColor = 'green'
   
    points+=20
    pointsDisplay.textContent=points
  }
 
}

const hardGameMode = function(){
  const minNum = 1, maxNum =100;
  
  console.log(display)
  let playerGuessNum = Number(playerGuess.value);
  if(!playerGuessNum || playerGuessNum < minNum || playerGuessNum > maxNum){
    display.textContent = "🚫 Pick between 1 and 100";
    playerGuess.style.borderColor = 'red';
    points; numOfTries;  highScore;
   
    
  }
  else if(playerGuessNum > compEasyGuess){
    display.textContent ="📈 Too high";
   wrongGuess();
  }
  else if(playerGuessNum < compEasyGuess){
    display.textContent ="📈 Too low"
   wrongGuess();
  }
  else if(playerGuessNum === compEasyGuess){
    display.textContent = '🥳 Correct Guess you Win'
    compGuess.style.backgroundColor = 'green'
    
    points+=50
    pointsDisplay.textContent=points
  }
}


