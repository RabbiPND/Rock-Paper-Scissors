  let playerName = "";
  let capitalLetter

  while (playerName === "") {
    playerName = prompt("Please enter your name:");;

    if (playerName === null) {
      break;
    }
  }

  if (playerName !== "") {
    console.log("Hello, " + playerName.charAt(0).toUpperCase() + playerName.slice(1) + "! Let's start the game.");
   } else {
   console.log("No name entered. Game cannot start.");
  }

  let playerEl = document.getElementById("player-el")
  playerEl.textContent = playerName.charAt(0).toUpperCase() + playerName.slice(1)

  let playerScore = 0
  let computerScore = 0
  let round = 1
  

  const roundPlayer = document.getElementById('round-player')
  const roundResult = document.getElementById("round")
  const roundComputer = document.getElementById('round-computer')

  function playGame(playerSelection) {
    let pick = ["Rock", "Paper", "Scissor"]

    let computerchoiceEl = document.getElementById("computerchoice-el")
    let computerSelection = pick [Math.floor(Math.random()*pick.length)];
    computerchoiceEl.textContent = computerSelection

    
    roundResult.textContent = `Round ${round}: `

    
    roundPlayer.textContent = `${playerName} - ${playerSelection}`
    console.log(roundPlayer)

  
    roundComputer.textContent = `Computer chose- ${computerSelection}`
                              
                              
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

    const body = document.body
    const playAgain = document.createElement('button')
    playAgain.classList.add('re-start')
    playAgain.textContent = "Re-Start"
    playAgain.style.color =  "green"
    playAgain.style.width = "150px"
    playAgain.style.backgroundColor = "goldenrod"
    playAgain.style.padding = "20px"
    playAgain.style.fontWeight = "bold"

    var centerX = (body.offsetWidth - playAgain.offsetWidth) / 2;
    var centerY = (body.offsetHeight - playAgain.offsetHeight) / 2;

    playAgain.style.position = "absolute";
    playAgain.style.left = centerX + "px";
    playAgain.style.top = centerY + "px";
    playAgain.style.marginTop = "80px"

function endGame() {

  if (playerScore > computerScore) {
    document.getElementById('container').style.display = 'none'
    const winMessage = document.createElement('div')
    winMessage.classList.add('win-message')
    winMessage.textContent = "Congratulations! You are the winner of this game of Rock, Paper, Scissors. Well played!"
    winMessage.style.color = "goldenrod"
    winMessage.style.border = "2px solid white"
    winMessage.style.padding = "20px"
    winMessage.style.backgroundColor = "white"
    winMessage.style.fontWeight = "bold"
    winMessage.style.textAlign = "center"
    body.append(winMessage)
    
    body.append(playAgain)

    playAgain.addEventListener('click', () => {
      document.querySelector('.re-start').addEventListener('click', function(){
        window.location.reload();
        return false;
      })
    })
  }

  else if(playerScore < computerScore) {
    document.getElementById('container').style.display = 'none'
    const loseMessage = document.createElement('div')
    loseMessage.classList.add('win-message')
    loseMessage.textContent = "Oops! You lost this game of Rock, Paper, Scissors. Better luck next time!"
    loseMessage.style.color = "goldenrod"
    loseMessage.style.border = "2px solid white"
    loseMessage.style.padding = "20px"
    loseMessage.style.backgroundColor = "white"
    loseMessage.style.fontWeight = "bold"
    loseMessage.style.textAlign = "center"
    body.append(loseMessage)
    
    body.append(playAgain)

    playAgain.addEventListener('click', () => {
      document.querySelector('.re-start').addEventListener('click', function(){
        window.location.reload();
        return false;
      })
    })
  }

  else {
    document.getElementById('container').style.display = 'none'
    const tieMessage = document.createElement('div')
    tieMessage.classList.add('win-message')
    tieMessage.textContent = "It's a tie! The game ended in a draw."
    tieMessage.style.color = "goldenrod"
    tieMessage.style.border = "2px solid white"
    tieMessage.style.padding = "20px"
    tieMessage.style.backgroundColor = "white"
    tieMessage.style.fontWeight = "bold"
    tieMessage.style.textAlign = "center"
    body.append(tieMessage)

    body.append(playAgain)

    playAgain.addEventListener('click', () => {
      document.querySelector('.re-start').addEventListener('click', function(){
        window.location.reload();
        return false;
      })
    })
  }
}


const rockButton = document.getElementById('Rock');
const paperButton = document.getElementById('Paper');
const scissorsButton = document.getElementById('Scissors')


rockButton.addEventListener('click', () => playGame('Rock'));
paperButton.addEventListener('click', () => playGame('Paper'));
scissorsButton.addEventListener('click', () => playGame('Scissors'));


