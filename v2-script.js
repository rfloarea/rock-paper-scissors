// --------- version 2: fully functional game --------- //

// --------- TODO --------- //
// 1. (DONE) Write in case insensitivity for player1 inputs
// 2. Award a point for each round won
// 3. Award no points for a draw and replay the round
// 4. Count each round
// 5. Display total points for each player after the game ends
// 6. Implement a loop to repeat function calls
// 7. Define the `playRound()` function

// --------- Pseudocode --------- //

// Step 1: Get inputs, or getInput()
    // 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
        // 1a1: Convert input to a lowercase string
        // 1a2: Store input value as `player1Input`
    // 1b: Generate a random integer for player2 (computer) within set range (0,2)
        // 1b1: Store input value as `player2Input`
        // 1b2: Reassign `player2Input` from an integer to a string
            // if player2Input == 0, then convert player2Input to "rock";
            // if player2Input == 1, then convert player2Input to "paper";
            // if player2Input == 2, then convert player2Input to "scissors";
    // 1c: Call gameLogic() with player1Input and player2Input as parameters
// Step 2: Core game logic, or gameLogic()
    // 2a: Evaluate/compare 'player1Input' and 'player2Input'
        // 2a1: Assign initial values for each player
        // 2a2: Assign initial values for `win` and `draw`
        // 2a3: Set win conditions for "rock" vs "paper" vs "scissors"
        // 2a4: Determine if a player meets any one win condition
            // 2a4a: If player1 meets a win condition, award them 1 point (increment `player1Score` by 1)
                // 2a4a1: Call `endRound()`
            // 2a4b: If player2 meets a win condition, award them 1 point (increment `player2Score` by 1)
                // 2a4b1: Call `endRound()`
            // 2a4c: If a draw is evaluated, no points are awarded, the round is restarted
                // 2a4c1: Print "It's a draw! Let's replay this round."
                // 2a4c2: Call `getInput()` to replay the round
// Step 3: Count round and print output, or `endRound()`
    // 3a: If `player1Score` was incremented, print "You win! Great job!"
    // 3b: If `player2Score was incremented, print "I win!"
    // 3c: Print score totals
    // 3d: Increment `roundCount` by 1
        // 3d1: If `roundCount` < 5, then a new round is started (playRound() is called)
        // 3d2: If `roundCount` equals 5, or if player_Score >= 3, then `endGame()` is called
// Step 4: End game, or `endGame()`


// --------- Code --------- //

// Step 1: Get inputs
let player1Input = prompt("Choose rock, paper, or scissors")
player1Input = player1Input.toLowerCase()
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

// Step 2: Evaluate inputs and award points

let player1 = 0
let player2 = 0
let winner = 1
let draw = 0 // maybe we can call the playRound() function here to avoid a counted round (since no points were awarded)?

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

// Step 3: Print output and count round

if (player1 == winner){
    console.log("You win! Great job!");
} else if (player2 == winner){
    console.log("I win!")
} else if (player1 == draw){
    console.log("It's a draw!")
}