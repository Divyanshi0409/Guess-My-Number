"use strict";

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20,highscore=0;

const displayMessage = function(message){
  document.querySelector(".message").textContent=message;
}

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  //if there is no input
  if (!guess) {
    displayMessage("🚫No number");
  }//if guess is same as the secret number
  else if (guess === secretNumber) {
    displayMessage("🎉Correct answer");  //print correct number

    document.querySelector("body").style.backgroundColor = "#60b347"; //change background color
    document.querySelector(".number").style.width = "30rem"; //double the width 

    document.querySelector(".number").textContent = secretNumber; //print the secret number
     if(score>highscore)highscore = score;
     document.querySelector(".highscore").textContent = highscore; //print highscore

  }
  else if(guess!==secretNumber){
    if(score>1){
    displayMessage(guess < secretNumber?"📉Too Low":"📈Too high");
    score--; //decrement score by 1 
    document.querySelector(".score").textContent = score;
    }
    else{
      displayMessage("😞You lost the game!");
      document.querySelector(".score").textContent = 0;
    }
  }  
});

document.querySelector(".again").addEventListener("click",function(){
  score=20;
  const secretNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector(".score").textContent = score;
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector("body").style.backgroundColor = "#222";
  displayMessage("Start guessing...");
  document.querySelector(".guess").value = "";
});
