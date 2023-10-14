function getComputerSelect() {
    let number = Math.floor(Math.random() * 3);
    if (number = 0) {
        computerSelection = "rock";
    } else if (number = 1) {
        computerSelection = "paper";
    } else if (number = 2) {
        computerSelection = "scissors";
    }
}

function getAutoSelect() {
    let number = Math.floor(Math.random() * 3);
    if (number = 0) {
        autoSelect = "rock";
    } else if (number = 1) {
        autoSelect = "paper";
    } else if (number = 2) {
        autoSelect = "scissors";
    }
}

displayText = "Please enter rock, paper, or scissors:";

// Compare player's selection to computer's to ddetermine
// the winner of a given round of rock, paper, scissors.
// AS OF NOW THE FUNCTION STICKS ON "PLEASE TRY AGAIN"
function rps(playerSelection, computerSelection) {
    playerSelection = prompt(`${displayText}`);
    if (playerSelection === computerSelection) {
        displayText = "You tied! Try again.";
    } else if (playerSelection == "rock"
    && computerSelection == "scissors") {
        displayText = "You win! Rock beats scissors.";
    } else if (playerSelection == "rock"
    && computerSelection == "paper") {
        displayText = "You lose! Paper beats rock.";
    } else if (playerSelection == "paper"
    && computerSelection == "rock") {
        displayText = "You win! Paper beats rock.";
    } else if (playerSelection == "paper"
    && computerSelection == "scissors") {
        displayText = "You lose! Scissors beats paper.";
    } else if (playerSelection == "scissors"
    && computerSelection == "rock") {
        displayText = "You lose! Rock beats scissors.";
    } else if (playerSelection == "scissors"
    && computerSelection == "paper") {
        displayText = "You win! Scissors beats paper.";
    } else {
        displayText = "Please try again."
    }
}

// Loop the rps function
function game() {
    getComputerSelect();
    getAutoSelect();
    let n = 0;
    while (n < 4) {
        rps();
        n++;
    }
}

game();