let pick = ["rock", "paper", "scissor"]

function getComputerChoice (pick) {
    return pick [Math.floor(Math.random()*pick.length)] 
  }

  //console.log(getComputerChoice(pick))

  let playerSelection = "Rock"
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
