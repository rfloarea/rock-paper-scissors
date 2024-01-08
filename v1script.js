// --- Pseudocode --- version 1: essential game loop functions

// Step 1: Get inputs
    // 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
        // 1a1: Store input value
    // 1b: Generate a random integer for player2 (computer) within set range
        // 1b1: Store input value
    // 1c: Convert stored integer to corresponding string value: "rock", "paper", or "scissors"
        // if player2Input == 0, then convert player2Input to "rock";
        // if player2Input == 1, then convert player2Input to "paper";
        // if player2Input == 2, then convert player2Input to "scissors";
// Step 2: Evaluate inputs
    // 2a: Establish win conditions
    // 2b: Determine which player meets any one win condition
        // 2b1: If neither, then it's a draw
    // 2c: Store winner value
// Step 3: Print output
    // if winner value is player1, print "You win!"
    // if winner value is player2, print "You lose."
    // if winner value for player1 and player2 are equal, print "It's a draw!"

// Repeat steps 1-3 until five cycles are completed

// --- Code ---

// Step 1: Get inputs
let player1Input = prompt("Choose rock, paper, or scissors")
console.log(`You chose,`, player1Input);

let player2Input = Math.floor(Math.random() * 3)

if (player2Input == 0){
    player2Input = "rock";
    console.log(`I chose,`, player2Input);
} else if (player2Input == 1){
    player2Input = "paper";
    console.log(`I chose,`, player2Input);
} else if (player2Input == 2){
    player2Input = "scissors";
    console.log(`I chose,`, player2Input);
}

// Step 2: Evaluate inputs

let player1 = 0
let player2 = 0
let winner = 1
let draw = 0

if (player1Input == "rock" && player2Input == "rock"){
    player1 = draw;
} else if (player1Input == "rock" && player2Input == "paper"){
    player2 = winner;
} else if (player1Input == "rock" && player2Input == "scissors"){
    player1 = winner;
} else if (player1Input == "paper" && player2Input == "paper"){
    player1 = draw;
} else if (player1Input == "paper" && player2Input == "rock"){
    player1 = winner;
} else if (player1Input == "paper" && player2Input == "scissors"){
    player2 = winner;
} else if (player1Input == "scissors" && player2Input == "scissors"){
    player1 = winner;
} else if (player1Input == "scissors" && player2Input == "paper"){
    player1 = winner;
} else if (player1Input == "scissors" && player2Input == "rock"){
    player2 = winner;
}

// Step 3: Print winner

if (player1 == winner){
    console.log("You win! Great job!");
} else if (player2 == winner){
    console.log("I win!")
} else if (player1 == draw){
    console.log("It's a tie!")
}