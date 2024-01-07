// --- Pseudocode --- version 1: essential game loop functions

// Step 1: Get inputs
    // 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
    // 1b: Generate a random number for player2 (computer) within set range
        // 1b1: assign one number to one value: "rock", "paper", or "scissors"
        // if randomNumber == 0, then player2Input = rock;
        // if randomNumber == 1, then player2Input = paper;
        // if randomNumber == 2, then player3Input = scissors;
// Step 2: Compare inputs
    // if player1Input > player2Input, then return winner = player1;
    // if player1Input < player2Input, then return winner = player2;
    // if player1Input == player2Input, then return winner = "You tied!";
// Step 3: Print output
    // if winner = player1 print "You win!"
    // if winner = player2, print "You lose."
    // if player1 output = player2 output, print, "You tied!"
// Repeat steps 1-3 until five cycles are completed

// --- Code ---

// Step 1: Get inputs
let player1Input = prompt("Choose rock, paper, or scissors")
console.log(`You chose:`, player1Input);

let player2Input = Math.floor(Math.random() * 3)
console.log(player2Input);

if (player2Input == 0){
    player2Input = "rock";
    console.log(player2Input);
} else if (player2Input == 1){
    player2Input = "paper";
    console.log(player2Input);
} else if (player2Input == 2){
    player2Input = "scissors";
    console.log(player2Input);
}

// Step 2: Compare inputs

let winner = null;
let player1 = "You"
let player2 = "I"

if (player1Input == "rock" && player2Input == "rock"){
    winner = null;
} else if (player1Input == "rock" && player2Input == "paper"){
    winner = player2;
} else if (player1Input == "rock" && player2Input == "scissors"){
    winner = player1;
}

console.log(winner)