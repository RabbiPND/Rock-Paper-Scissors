 let playerName = "";

 while (playerName === "") {
   playerName = prompt("Please enter your name:");

   if (playerName === null) {
     break;
   }
 }

 if (playerName !== "") {
   console.log("Hello, " + playerName + "! Let's start the game.");
  } else {
  console.log("No name entered. Game cannot start.");
 }

 let playerEl = document.getElementById("player-el")
 playerEl.textContent = playerName

let pick = ["rock", "paper", "scissor"]

function getComputerChoice (pick) {
    return pick [Math.floor(Math.random()*pick.length)] 
  }

  //console.log(getComputerChoice(pick))

  let playerSelection = getComputerChoice (pick) 
  let playerChoiceEl = document.getElementById("playerchoice-el")
  playerChoiceEl.textContent = playerSelection

  let computerSelection = getComputerChoice (pick) 
  let computerChoice = document.getElementById("computerchoice-el")
  computerChoice.textContent = computerSelection


  function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")
    ) { 
        return "You Win!";
    }   else {
        return "Computer wins!"
    }
}

let resultEl = document.getElementById("result-el")
resultEl.textContent = playRound (playerSelection, computerSelection)

 
console.log(playRound (playerSelection, computerSelection))
