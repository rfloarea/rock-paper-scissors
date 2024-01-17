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
  // call our function to update playerScoreElement and computerScoreElement
  updateScore(playerScore, computerScore);
}

// write a function to generate a choice for the computer