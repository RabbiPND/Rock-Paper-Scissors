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
 console.log(playerEl)
 playerEl.textContent = playerName

let pick = ["rock", "paper", "scissor"]

function getComputerChoice (pick) {
    return pick [Math.floor(Math.random()*pick.length)] 
  }

  //console.log(getComputerChoice(pick))

  let playerSelection = "scissor"
  let computerSelection = getComputerChoice (pick) 

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
 
console.log(playRound (playerSelection, computerSelection))
