let roundWinner = ` `;
let playerScore = 0;
let computerScore = 0;

const rockBtn = document.getElementById('rockBtn');
const paperBtn = document.getElementById('paperBtn');
const scissorBtn = document.getElementById('scissorBtn');
const playerChoiceElement = document.getElementById('playerChoice');
const computerChoiceElement = document.getElementById('computerChoice');
const playerScoreElement = document.getElementById('playerScore');
const computerScoreElement = document.getElementById('computerScore');
const roundWinnerElement = document.getElementById('winnerMessage');
const playAgainBtn = document.getElementById('modalBtn');
const modalElement = document.getElementById('modal');
const modalTextElement = document.getElementById('modalText');

rockBtn.addEventListener('click', () => clickEvent('ROCK'));
paperBtn.addEventListener('click', () => clickEvent('PAPER'));
scissorBtn.addEventListener('click', () => clickEvent('SCISSORS'));
playAgainBtn.addEventListener('click', () => hideModal);

function clickEvent(playerChoice) {

  if (isGameOver()) {
    modalElement.style.display = modalElement.style.display === 'none' ? '' : 'none';
    //showModal();
    return;
  }

  const computerChoice = getComputerChoice();
  updateChoiceElements(playerChoice, computerChoice);
  playRound(playerChoice, computerChoice);
  
  if (isGameOver()) {
    showModal();
    resetGame();
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
  updateScoreBoard(roundWinner, playerScore, computerScore);
}

function updateChoiceElements(playerChoice, computerChoice) {
  playerChoiceElement.textContent = playerChoice;
  computerChoiceElement.textContent = computerChoice;
}

function updateScoreBoard(roundWinner, playerScore, computerScore) {
  roundWinnerElement.textContent = `${roundWinner}`;
  playerScoreElement.textContent = `Your score: ${playerScore}`;
  computerScoreElement.textContent = `Computer score: ${computerScore}`;
}

function isGameOver() {
  return playerScore == 5 || computerScore == 5
}

function showModal() {
  //modalElement.style.removeProperty('display: none;');
  modalElement.style.display = modalElement.style.display === 'none' ? '' : 'none';
}

function hideModal() {
  modalElement.style.setProperty('display: none;');
}

function resetGame() {
  playerScore = 0;
  playerScoreElement.textContent = `Your score: 0`;
  computerScore = 0;
  computerScoreElement.textContent = `Computer score: 0`;
  playerChoiceElement.textContent = ` `;
  computerChoiceElement.textContent = ` `;
  roundWinnerElement.textContent = ` `;
}

function updateModalTextElement() {
  return playerScore > computerScore
    ? (modalTextElement.textContent = `You won!`)
    : (modalTextElement.textContent = `You lost`);
}
