// --- GAME --- //

let playerScore = 0
let computerScore = 0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    roundWinner = 'tie'
  }
  if (
    (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
    (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
    (playerSelection === 'PAPER' && computerSelection === 'ROCK')
  ) {
    playerScore++
    roundWinner = 'player'
  }
  if (
    (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
    (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
    (computerSelection === 'PAPER' && playerSelection === 'ROCK')
  ) {
    computerScore++
    roundWinner = 'computer'
  }
  updateScoreMessage(roundWinner, playerSelection, computerSelection)
}

function getRandomChoice() {
  let randomNumber = Math.floor(Math.random() * 3)
  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

function isGameOver() {
  return playerScore === 5 || computerScore === 5
}

// --- UI --- //

// add an event listener to all three buttons to trigger a round
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

rockBtn.addEventListener('click', clickListener('ROCK'))
paperBtn.addEventListener('click', clickListener('PAPER'))
scissorBtn.addEventListener('click', clickListener('SCISSORS'))

// roll up all the function calls that form a round played into the click call

function clickListener() {
    
    // call playRound 
    // call updateScores
    // call getRandomChoice

}

function updateScoreboard() {
    
}