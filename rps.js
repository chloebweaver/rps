// Create a function called getComputerChoice
// that will randomly return r, p, or s.

function getComputerChoice() {
    let number = Math.floor(Math.random() * 3);
    if (number < 1) {
        computerSelection = "rock";
    } else if (number < 2) {
        computerSelection = "paper";
    } else {
        computerSelection = "scissors";
    }
}

function getAutoSelect() {
    let number = Math.floor(Math.random() * 3);
    if (number < 1) {
        autoSelect = "rock";
    } else if (number < 2) {
        autoSelect = "paper";
    } else {
        autoSelect = "scissors";
    }
}

// Write a function that allows a single round of rps.
// It should take two parameters,
// playerSelection and computerSelection,
// and return a string declaring a winner:
// "You lose! Paper beats rock."
// The playerSelection should be case-insensitive.
// AS OF NOW THE FUNCTION STICKS ON "PLEASE TRY AGAIN"

displayText = "Please enter rock, paper, or scissors:"

function rps(playerSelection, computerSelection) {
    getComputerChoice();
    getAutoSelect();
    playerSelection = prompt(`${displayText}`, autoSelect);
    if (playerSelection === computerSelection) {
        displayText = "You tied! Try again.";
    } else if (playerSelection == "rock" && computerSelection == "scissors") {
        displayText = "You win! Rock beats scissors.";
    } else if (playerSelection == "rock" && computerSelection == "paper") {
        displayText = "You lose! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "rock") {
        displayText = "You win! Paper beats rock.";
    } else if (playerSelection == "paper" && computerSelection == "scissors") {
        displayText = "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors" && computerSelection == "rock") {
        displayText = "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors" && computerSelection == "paper") {
        displayText = "You win! Scissors beats paper.";
    } else {
        displayText = "Please try again."
    }
}

// Write a new function called game().
// Either loop your previous function or
// call it five times.
// NOW you may console.log the winner declaration.
// Use prompt() to get user input.
// Feel free to create more helper functions for utility.

function game() {
    let n = 0;
    while (n < 4) {
        rps();
        n++;
    }
}

game();