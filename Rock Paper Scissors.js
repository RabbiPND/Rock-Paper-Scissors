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
  playerEl.textContent = playerName // it works

 

 

function getComputerChoice () {
  let pick = ["Rock", "Paper", "Scissor"]
    return pick [Math.floor(Math.random()*pick.length)] 
    
  }

  function playGame(playerSelection) {

    let computerSelection = getComputerChoice();
    let computerChoiceEl = document.getElementById("computerchoice-el")
    computerChoiceEl.textContent = computerSelection

    const result = playRound(playerSelection, computerSelection);

    const resultElement = document.querySelector("#result");
    resultElement.textContent = `Result: ${result}`;
  }



  function playRound (playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) { 
        return "You Win!";
    }   else {
        return "Computer wins!"
    }
}

