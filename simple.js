// let's keep things super fucking simple
// and maybe follow the directions for once

// need a function called getComputerChoice()

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

// great! now go get that playerChoice!

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors.");
    playerChoice = playerChoice.toLowerCase();
    return playerChoice;
}

console.log(getPlayerChoice());

// awesome! you did it! now, let's make them fight!