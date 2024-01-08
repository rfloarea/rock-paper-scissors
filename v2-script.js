// --------- version 2: fully functional game --------- //

// --------- TODO --------- //
// 1. Write in case insensitivity for player1 inputs
// 2. Count each round
// 3. Account for draws by replaying a round (award no points)
// 4. Award a point for each round won
// 5. Display total points for each player after the game ends
// 6. Implement a loop to repeat function calls

// --------- Pseudocode --------- //

// Step 1: Get inputs
    // 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
        // 1a1: Store input value
    // 1b: Generate a random integer for player2 (computer) within set range (0,2)
        // 1b1: Store input value
        // 1b2: Convert stored integer to a string
            // if player2Input == 0, then convert player2Input to "rock";
            // if player2Input == 1, then convert player2Input to "paper";
            // if player2Input == 2, then convert player2Input to "scissors";
// Step 2: Evaluate inputs
    // 2a: Assign initial values for each player
    // 2b: Assign initial values for `win` and `draw`
    // 2c: Establish win conditions through comparison
    // 2d: Determine which player meets any one win condition
    // 2e: Reassign player1 or player2 the `winner` value
        // 2e1: If neither player meets a win condition, then it's a draw
        // 2e1: A `draw` value is reassigned
// Step 3: Print output
    // if player1 matches the `winner` value, print "You win! Great job!"
    // if player2 matches the `winner` value, print "I win!"
    // if player1 matches the `draw` value, print "It's a draw!"


// --------- Code --------- //

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

// Step 3: Print output

if (player1 == winner){
    console.log("You win! Great job!");
} else if (player2 == winner){
    console.log("I win!")
} else if (player1 == draw){
    console.log("It's a draw!")
}