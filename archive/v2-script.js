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

// Step 1: Get inputs and print
    // 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
        // 1a1: Store input value as `player1Input`
    // 1b: Generate a random integer for player2 (computer) within set range (0,2)
        // 1b1: Store input value as `player2Input`
    // 1c: Call showInputs()
        // 1c1: Convert `player1Input` to a lowercase string
        // 1c2: Print `player1Input`
        // 1c3: Reassign `player2Input` from an integer to a string
            // 1c3a: if player2Input == 0, then convert player2Input to "rock" and print;
            // 1c3b: if player2Input == 1, then convert player2Input to "paper" and print;
            // 1c3c: if player2Input == 2, then convert player2Input to "scissors" and print;
        // 1c4: Print `player2Input`
    // 1c: Call gameLogic() with player1Input and player2Input as parameters
// Step 2: Evaluate inputs, or evalInput(). Calculate player scores, or calcScore()
    // 2a: Evaluate/compare 'player1Input' and 'player2Input'
        // 2a1: Assign initial values for each player
        // 2a2: Assign initial values for `win` and `draw`
        // 2a3: Set win conditions for "rock" vs "paper" vs "scissors"
    // 2b: Determine if a player meets any one win condition
        // 2b1: If player1 meets a win condition, award them 1 point (increment `player1Score` by 1)
            // 2b1a: Call `endRound()`
        // 2b2: If player2 meets a win condition, award them 1 point (increment `player2Score` by 1)
            // 2b2a: Call `endRound()`
        // 2b3: If a draw is evaluated, no points are awarded, the round is restarted
            // 2b3a: Print "It's a draw! Let's replay this round."
            // 2b3b: Call `getInput()` to replay the round
// Step 3: Count round and print output, or `endRound()`
    // 3a: If `player1Score` was incremented, print "You win! Great job!"
    // 3b: If `player2Score was incremented, print "I win!"
    // 3c: Print score totals
    // 3d: Increment `roundCount` by 1
        // 3d1: If `roundCount` < 5, then a new round is started (playRound() is called)
        // 3d2: If `roundCount` equals 5, or if player_Score >= 3, then `endGame()` is called
// Step 4: End game, or `endGame()`


// --------- Code --------- //

// Step 1: Get inputs and print

// 1a: Prompt player1 for inputs: "rock", "paper", or "scissors"
// 1a2: Store input value as `player1Input`
let player1Input = prompt("Choose rock, paper, or scissors");

// 1b: Generate a random integer for player2 (computer) within set range (0,2)
// 1b1: Store input value as `player2Input`
let player2Input = Math.floor(Math.random() * 3);

// 1c: Call showInput() function to print inputs
showInput();

function showInput() {
    // 1c1: Convert `player1Input` to a lowercase string
    player1Input = player1Input.toLowerCase();
    // 1c2: Print `player1Input`
    console.log(`You chose,`, player1Input);
    
    // 1c3: Reassign `player2Input` from an integer to a string
    // 1c3a: if player2Input == 0, then convert player2Input to "rock" and print;
    if (player2Input == 0){
        player2Input = "rock";
        console.log(`I chose,`, player2Input);
    // 1c3b: if player2Input == 1, then convert player2Input to "paper" and print;
    } else if (player2Input == 1){
        player2Input = "paper";
        console.log(`I chose,`, player2Input);
    // 1c3c: if player2Input == 2, then convert player2Input to "scissors" and print;
    } else if (player2Input == 2){
        player2Input = "scissors";
        console.log(`I chose,`, player2Input);
    }
}


// Step 2: Evaluate inputs and calculate points

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

// RANDOM STUFF //


// function getComputerChoice() {
//     let computerChoice = Math.floor(Math.random() * 3);
//     switch (computerChoice) {
//         case 0:
//             computerChoice = `rock`;
//             console.log(computerChoice);
//             return;
//         case 1:
//             computerChoice = `paper`;
//             console.log(computerChoice);
//             return;
//         case 2:
//             computerChoice = `scissors`;
//             console.log(computerChoice);
//             return;
//     }
// }