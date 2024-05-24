const choices = ["rock", "paper", "scissors"];
const emojis = {
  rock: "👊",
  paper: "✋",
  scissors: "✌️",
};
const playersection = document.getElementById("playersection");
const computersection = document.getElementById("computersection");
const resultsection = document.getElementById("resultsection");
const playerscoredisplay = document.getElementById("playerscoredisplay");
const computerscoredisplay = document.getElementById("computerscoredisplay");
let playerscore = 0;
let computerscore = 0;

function PlayGame(playerChoice) {
  const computerChoice = choices[Math.floor(Math.random() * 3)];
  console.log(computerChoice);
  console.log(playerChoice);

  let result;
  if (playerChoice === computerChoice) {
    result = "draw";
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    result = "Player wins";
    playerscore++;
  } else {
    result = "Computer wins";
    computerscore++;
  }
  console.log(result);
  playersection.innerHTML = ` ${emojis[playerChoice]}`;
  computersection.innerHTML = `${emojis[computerChoice]}`;
  resultsection.innerHTML = result;
  UpdateScoreDisplay();
}

function UpdateScoreDisplay() {
  playerscoredisplay.innerHTML = `${playerscore}`;
  computerscoredisplay.innerHTML = `${computerscore}`;
}
