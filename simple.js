// let's keep things super fucking simple
// and maybe follow the directions for once

// first things first, we need to initialize some globals

let playerScore = 0
let computerScore = 0
let roundWinner = ``
let playerChoice = ``
let computerChoice = 0

// now we need a function to get the computer's choice

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random() * 3);
    switch (computerChoice) {
        case 0:
            return `rock`
        case 1:
            return `paper`
        case 2:
            return `scissors`
    }
}

console.log(getComputerChoice());

// great! now go get the player's choice!

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

console.log(getPlayerChoice());

// awesome! you did it! now, let's make them fight!

function playRound(getPlayerChoice, getComputerChoice) {
    // note: this is like what we already have in the v2 file, but simplified!
    if (playerChoice === computerChoice) {
        roundWinner = `draw`
    }
    // if playerChoice beats computerChoice
    else if (
        (playerChoice === `rock` && computerChoice === `scissors`) ||
        (playerChoice === `paper` && computerChoice === `rock`) ||
        (playerChoice === `scissors` && computerChoice === `paper`)
    ) {
        //then increment playerScore
        playerScore++
        //and declare the winner of the round!
        roundWinner = `You win!`
    }
    // now, if the computer's choice beats the player's choice, then...
    else if (
        (computerChoice === `rock` && playerChoice === `scissors`) ||
        (computerChoice === `paper` && playerChoice === `rock`) ||
        (computerChoice === `scissors` && playerChoice === `paper`)
    ) {
        // then increment computerScore
        computerScore++
        //and declare them the winner!
        roundWinner = `I win!`
    }

    // now we need to share the news
    console.log(roundWinner)
    console.log(`Your score is: ${playerScore}`)
    console.log(`My score is: ${computerScore}`)

}

playRound();