let roundWinner = ``;
let playerScore = 0;
let computerScore = 0;


playRound(playerChoice, computerChoice);


function playRound(playerChoice, computerChoice) {
    let playerChoice = getPlayerChoice();
    let computerChoice = getComputerChoice();

    let roundCounter = 0;

    function getPlayerChoice() {
        let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
        
        console.log(`You chose: ${playerChoice}`);
        
        return playerChoice;
    }

    function getComputerChoice(computerChoice) {
    
        computerChoice = Math.floor(Math.random() * 3);
        
        if (computerChoice == 0) {
            computerChoice = "rock";
            console.log(`I chose: ${computerChoice}`);
            return computerChoice;
        } else if (computerChoice == 1) {
            computerChoice = "paper";
            console.log(`I chose: ${computerChoice}`);
            return computerChoice;
        } else {
            computerChoice = "scissors";
            console.log(`I chose: ${computerChoice}`);
            return computerChoice;
        }
    }

    if (playerChoice === computerChoice) {
        roundCounter++
        roundWinner = `It's a draw.`
    }
    else if (
        (playerChoice === `rock` && computerChoice === `scissors`) ||
        (playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissors` && computerChoice === `paper`)
    ) {
        ++playerScore
        roundCounter++
        roundWinner = `You win!`
    }
    else if (
        (computerChoice === `rock` && playerChoice === `scissors`) ||
        (computerChoice === `paper` && playerChoice === `rock`) ||
        (computerChoice === `scissors` && playerChoice === `paper`)
    ) {
        ++computerScore
        roundCounter++
        roundWinner = `I win!`
    }
    console.log(roundWinner)
    console.log(`Your score is: ${playerScore}`)
    console.log(`My score is: ${computerScore}`)
}