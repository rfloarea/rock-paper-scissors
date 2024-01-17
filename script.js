// create our element selectors that will change as the game is played

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');

const playerChoice = document.getElementById('playerChoice');
const computerChoice = document.getElementById('computerChoice');

const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const winnerMessageElement = document.getElementById('winnerMessage');

// create our event listeners to get the player's selection

rockBtn.addEventListener('click', () => clickEvent('ROCK'));
paperBtn.addEventListener('click', () => clickEvent('PAPER'));
scissorsBtn.addEventListener('click', () => clickEvent('SCISSORS'));
// TODO: create some sort of "play again" button

//