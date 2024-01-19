// initialize global variables
let roundWinner = ` `;
let playerScore = 0;
let computerScore = 0;

// initialize variables for selected elements
const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const playerChoiceInput = document.getElementById('playerChoice');
const computerChoiceInput = document.getElementById('computerChoice');
const playerScoreInput = document.getElementById('playerScore');
const computerScoreInput = document.getElementById('computerScore');
const roundWinnerInput = document.getElementById('roundWinner');
const modalTextElement = document.getElementById('modalText');
const playAgainBtn = document.getElementById('playAgainButton')
const overlay = document.getElementById('overlay');
const modal = document.getElementById('modal');

// use click event listeners on buttons for player input: rock, paper, or scissors
rockBtn.addEventListener('click', () => clickEvent('ROCK'));
paperBtn.addEventListener('click', () => clickEvent('PAPER'));
scissorBtn.addEventListener('click', () => clickEvent('SCISSORS'));
playAgainBtn.addEventListener('click', () => resetGame());

// pass the user input into a function that triggers a game round
function clickEvent(playerChoice) {
  // run a function that generates the computer's choice and initialize a variable
  const computerChoice = getComputerChoice();
  // pass player and computer choices as args into a function that updates choice elements
  updateChoiceElements(playerChoice, computerChoice);
  // pass same choice values as args into the game logic function
  playRound(playerChoice, computerChoice);
  // pass the results of the round as args into a function that updates the score board
  updateScoreBoard(roundWinner, playerScore, computerScore);
  
  // if a player's score is 5, then stop the game and show the replay modal
  if (isGameOver()) {
    showOverlay();
    updateModalTextElement();
    showModal();
  }
}

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3);

  switch (randomNumber) {
    case 0:
      return 'ROCK'
    case 1:
      return 'PAPER'
    case 2:
      return 'SCISSORS'
  }
}

function playRound(playerChoice, computerChoice) {
  if (playerChoice === computerChoice){
    roundWinner = `It's a tie`
  }
  if (
    (playerChoice == 'ROCK' && computerChoice == 'SCISSORS') ||
    (playerChoice == 'PAPER' && computerChoice == 'ROCK') ||
    (playerChoice == 'SCISSORS' && computerChoice == 'PAPER')
  ) {
    roundWinner = `You won!`
    playerScore++
  }
  if (
    (computerChoice == 'ROCK' && playerChoice == 'SCISSORS') ||
    (computerChoice == 'PAPER' && playerChoice == 'ROCK') ||
    (computerChoice == 'SCISSORS' && playerChoice == 'PAPER')
  ) {
    roundWinner = `You lost`
    computerScore++
  }
}

function updateChoiceElements(playerChoice, computerChoice) {
  playerChoiceInput.textContent = playerChoice;
  computerChoiceInput.textContent = computerChoice;
}

function updateScoreBoard(roundWinner, playerScore, computerScore) {
  roundWinnerInput.textContent = `${roundWinner}`;
  playerScoreInput.textContent = `Your score: ${playerScore}`;
  computerScoreInput.textContent = `Computer score: ${computerScore}`;
}

function isGameOver() {
  return playerScore == 5 || computerScore == 5
}

function showOverlay() {
  overlay.classList.add('active');
}

function hideOverlay() {
  overlay.classList.remove('active');
}

function updateModalTextElement() {
  return playerScore > computerScore
    ? (modalTextElement.textContent = `You won!`)
    : (modalTextElement.textContent = `You lost`);
}

function showModal() {
  modal.classList.add('active');
}

function hideModal() {
  modal.classList.remove('active');
}

function resetGame() {
  playerScore = 0;
  playerScoreInput.textContent = `Your score: 0`;
  computerScore = 0;
  computerScoreInput.textContent = `Computer score: 0`;
  playerChoiceInput.textContent = ` `;
  computerChoiceInput.textContent = ` `;
  roundWinnerInput.textContent = `Round winner: `;
  hideOverlay();
  hideModal();
}


