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

  let playerChoiceEl = document.getElementById("playerchoice-el")
  playerChoiceEl.textContent = choices

  let computerChoiceEl = document.getElementById("computerchoice-el")



function playGame() {
  const choices = ['rock', 'paper', 'scissors'];
  const playerChoice = prompt('Enter your choice: rock, paper, or scissors');
  
   if (!playerChoice) {
     alert('Invalid choice. Please try again!');
     return;
   }
  
   playerChoice.toLowerCase();
  
   if (!choices.includes(playerChoice)) {
     alert('Invalid choice. Please try again!');
     return;
   }

  const computerChoice = choices[Math.floor(Math.random() * choices.length)];
  const result = getResult(playerChoice, computerChoice);

  alert(`Player: ${playerChoice}\nComputer: ${computerChoice}\nResult: ${result}`);
}

function getResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) {
    return "It's a tie!";
  } else if (
    (playerChoice === 'rock' && computerChoice === 'scissors') ||
    (playerChoice === 'paper' && computerChoice === 'rock') ||
    (playerChoice === 'scissors' && computerChoice === 'paper')
  ) {
    return "Player wins!";
  } else {
    return "Computer wins!";
  }
}
