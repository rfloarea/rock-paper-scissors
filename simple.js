let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();

function getPlayerChoice() {

    let playerChoice = prompt("Choose rock, paper, or scissors.").toLowerCase();
    
    console.log(playerChoice);
    
    return playerChoice;
}


function getComputerChoice(computerChoice) {
    
	computerChoice = Math.floor(Math.random() * 3);
    
	if (computerChoice == 0) {
		computerChoice = "rock";
        console.log(computerChoice);
		return computerChoice;
	} else if (computerChoice == 1) {
		computerChoice = "paper";
        console.log(computerChoice);
		return computerChoice;
	} else {
		computerChoice = "scissors";
        console.log(computerChoice);
		return computerChoice;
	}
}



// write a function that takes the userChoice and computerChoice and makes them fight


let roundWinner = ``;
let playerScore = 0;
let computerScore = 0;

// function playRound(playerChoice, computerChoice) {
//     if (playerChoice === computerChoice) {
//         roundWinner = `draw`
//     }
//     else if (
//         (playerChoice === `rock` && computerChoice === `scissors`) ||
//         (playerChoice === `paper` && computerChoice === `rock`) ||
//         (playerChoice === `scissors` && computerChoice === `paper`)
//     ) {
//         playerScore++
//         roundWinner = `You win!`
//     }
//     else if (
//         (computerChoice === `rock` && playerChoice === `scissors`) ||
//         (computerChoice === `paper` && playerChoice === `rock`) ||
//         (computerChoice === `scissors` && playerChoice === `paper`)
//     ) {
//         computerScore++
//         roundWinner = `I win!`
//     }

//     console.log(roundWinner)
//     console.log(`Your score is: ${playerScore}`)
//     console.log(`My score is: ${computerScore}`)

// }