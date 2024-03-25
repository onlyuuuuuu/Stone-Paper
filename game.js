const userImg = document.querySelector("#user-hand");
const aiImg = document.querySelector("#ai-hand");
const optionImgs = document.querySelectorAll(".options > img");
const userScoreElem = document.querySelector(".score-user");
const aiScoreElem = document.querySelector(".score-ai");
const replayBtnElem = document.querySelector(".replay");
const optionsElem = document.querySelector(".options");
const handOptions = ["rock", "paper", "scissors"];
let userScore = 0;
let aiScore = 0;

optionImgs.forEach(img => img.addEventListener("click", () => playRound(img.alt)));

function playRound(userChoice) 
{
  updateImage(userImg, userChoice);
  const aiChoice = getRandomChoice();
  updateImage(aiImg, aiChoice);
  updateScores(userChoice, aiChoice);
  checkScore();
}

function updateImage(imgElem, choice) 
{
  imgElem.src = `assets/${choice}-hand.png`;
}

function getRandomChoice() 
{
  return handOptions[Math.floor(Math.random() * handOptions.length)];
}

function updateScores(userChoice, aiChoice) 
{
  const result = getResult(userChoice, aiChoice);
  if (result === "win") userScoreElem.textContent = ++userScore;
  else if (result === "lose") aiScoreElem.textContent = ++aiScore;
}

function getResult(userChoice, aiChoice) 
{
  if ((userChoice === "rock" && aiChoice === "scissors") ||
      (userChoice === "paper" && aiChoice === "rock") ||
      (userChoice === "scissors" && aiChoice === "paper")) 
      {
    return "win";
  } 
  else if (userChoice !== aiChoice) 
  {
    return "lose";
  }
}

function checkScore() {
  if (userScore === 5 || aiScore === 5) 
  {
    optionsElem.style.visibility = "hidden";
    replayBtnElem.style.visibility = "visible";
  }
}

replayBtnElem.addEventListener("click", () => 
{
    window.location.href = "game.html";
  });
