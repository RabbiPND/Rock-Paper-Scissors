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

  let playerScore = 0
  let computerScore = 0
  let round = 1
  

  function playGame(playerSelection) {
    let pick = ["Rock", "Paper", "Scissor"]

    let computerchoiceEl = document.getElementById("computerchoice-el")
    let computerSelection = pick [Math.floor(Math.random()*pick.length)];
    computerchoiceEl.textContent = computerSelection

    const roundResult = document.getElementById("round-result")
    roundResult.textContent = `Round ${round} : You chose ${playerSelection} Computer chose ${computerSelection}.`;
    
    
    let playerMark = document.getElementById("player-score")
    let computerMark = document.getElementById("computer-score")

    if (playerSelection === computerSelection) {
      roundResult.textContent += "It's a tie!";

    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissor") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissor" && computerSelection === "Paper")
    ) { 
      roundResult.textContent += "You Win!";
      playerScore++;
      playerMark.textContent = playerScore;


    }   else {
      roundResult.textContent += "Computer Wins!!";
      computerScore++;
      computerMark.textContent = computerScore
    }

    round++;

    if (round > 5) {
      endGame()
    }
    ;
  }


function endGame() {

  let messageEl = document.getElementById("message-el")
  if (playerScore > computerScore) {
    messageEl.textContent = "Congratulations! You are the winner of this game of Rock, Paper, Scissors. Well played!"
  }

  else if(playerScore < computerScore) {
    messageEl.textContent = "Oops! You lost this game of Rock, Paper, Scissors. Better luck next time!";  
  }

  else {
    messageEl.textContent = "It's a tie! The game ended in a draw.";
  }
}


const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors')

// Add event listeners to buttons
rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));


