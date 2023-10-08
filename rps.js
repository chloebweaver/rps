// Create a function called getComputerChoice
// that will randomly return r, p, or s.

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    console.log(number);
    if (number > 2) {
        computerSelection = "rock";
    } else if (2 > number > 1) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
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

function rps(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        declareWinner = "You tied! Try again.";
    } else if (playerSelection = "rock" && computerSelection = "scissors") {
        declareWinner = "You win! Rock beats scissors.";
    } else if (playerSelection = "rock" && computerSelection = "paper") {
        declareWinner = "You lose! Paper beats rock.";
    } else if (playerSelection = "paper" && computerSelection = "rock") {
        declareWinner = "You win! Paper beats rock.";
    } else if (playerSelection = "paper" && computerSelection = "scissors") {
        declareWinner = "You lose! Scissors beats paper.";
    } else if (playerSelection = "scissors" && computerSelection = "rock") {
        declareWinner = "You lose! Rock beats scissors.";
    } else {
        declareWinner = "You win! Scissors beats paper.";
    }
}

rps();

// console.log the returned string to test the code.
// Then remove the console.log portion of code.



// Write a new function called game().
// Either loop your previous function or
// call it five times.
// NOW you may console.log the winner declaration.
// Use prompt() to get user input.
// Feel free to create more helper functions for utility.