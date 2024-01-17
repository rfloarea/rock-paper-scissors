// create our element selectors that will change as the game is played

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

const playerChoiceElement = document.getElementById('playerChoice');
const computerChoiceElement = document.getElementById('computerChoice');

const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const winnerMessageElement = document.getElementById('winnerMessage');

// create our event listeners to get the player's selection

rockBtn.addEventListener('click', () => clickEvent('ROCK'));
paperBtn.addEventListener('click', () => clickEvent('PAPER'));
scissorsBtn.addEventListener('click', () => clickEvent('SCISSORS'));
// TODO: create some sort of "play again" button

// initiate the game loop using our player's choice

function clickEvent(playerChoice) {
  // call our function to get computerChoice and store value as computerChoice
  const computerChoice = getComputerChoice();
  // call our function to play a round using playerChoice and computerChoice as args
  playRound(playerChoice, computerChoice);
  // call our function to update playerChoiceElement and computerChoiceElement
  updateChoices(playerChoice, computerChoice);
  // call our function to update winnerMessageElement, playerScoreElement and computerScoreElement
  updateScoreBoard(playerScore, computerScore);
}

// generate a choice for the computer
function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);

  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

// use our player and computer choices to play one round
let roundWinner = ``;
let playerScore = 0;
let computerScore = 0;

function playRound(playerChoice, computerChoice) {
  // tie results
  if (playerChoice === computerChoice){
    roundWinner = `It's a tie!`
  }
  // player win results
  if (
    (playerChoice == 'ROCK' && computerChoice == 'SCISSORS') ||
    (playerChoice == 'PAPER' && computerChoice == 'ROCK') ||
    (playerChoice == 'SCISSORS' && computerChoice == 'PAPER')
  ) {
    roundWinner = `You win!`
    playerScore++
  }
  // computer win results
  if (
    (computerChoice == 'ROCK' && playerChoice == 'SCISSORS') ||
    (computerChoice == 'PAPER' && playerChoice == 'ROCK') ||
    (computerChoice == 'SCISSORS' && playerChoice == 'PAPER')
  ) {
    roundWinner = `You lose :(`
    computerScore++
  }
}