function getComputerSelect() {
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

displayText = "Please enter rock, paper, or scissors:"

// The following function compares the player's selection
// to the computer's to determine the winner of a given
// round of rock, paper, scissors.
// AS OF NOW THE FUNCTION STICKS ON "PLEASE TRY AGAIN"

function rps(playerSelection, computerSelection) {
    getComputerSelect();
    getAutoSelect();
    playerSelection = prompt(`${displayText}`);
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

// The game function then loops the rps function.

function game() {
    let n = 0;
    while (n < 4) {
        rps();
        n++;
    }
}

game();