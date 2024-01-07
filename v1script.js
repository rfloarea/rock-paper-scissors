// Pseudocode: version 1 - essential game loop functions

// Human chooses "rock", "paper", or "scissors" via input
// Computer chooses "rock", "paper", or "scissors" via random selection
// The choices are compared
// A winner and loser are declared
// Repeat this cycle 5 times to complete the game loop

// --- okay, let's do this ---

// initialize variables
let rock = "rock"
let paper = "paper"
let scissors = "scissors"

// prompt user for input
let userInput = prompt("Choose rock, paper, or scissors")
console.log(`You chose:`, userInput)

// get computer to generate a random number between 0, 2
let computerInput = Math.floor(Math.random() * 3)
console.log(computerInput)
// convert computer input (number) to rock, paper, scissors
if (computerInput == 0){
    console.log("Computer chose: rock");
}   else if (computerInput == 1){
    console.log("Computer chose: paper");
}   else if (computerInput == 2){
    console.log("Computer chose: scissors")
}

// Compare the user input vs computer input
