// Create a function called getComputerChoice
// that will randomly return r, p, or s.

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    if (number > 2) {
        computerResult = "rock";
    } else if (2 > number > 1) {
        computerResult = "paper";
    } else {
        computerResult = "scissors";
    }
    console.log(computerResult);
}

getComputerChoice();

// Write a function that allows a single round of rps.
// It should take two parameters,
// playerSelection and computerSelection,
// and return a string declaring a winner:
// "You lose! Paper beats rock."
// The playerSelection should be case-insensitive.



// console.log the returned string to test the code.
// Then remove the console.log portion of code.



// Write a new function called game().
// Either loop your previous function or
// call it five times.
// NOW you may console.log the winner declaration.
// Use prompt() to get user input.
// Feel free to create more helper functions for utility.