const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

const playRound = (playerChoice, computerChoice) => {
    const playerSelection = playerChoice.toLowerCase();
    let result = document.querySelector("div.result");
    switch (playerSelection) {
        case "rock":
            if (computerChoice == "Rock") {
                console.log("It's a tie!");
                result.textContent = "It's a tie!"; 
            } else if (computerChoice == "Paper") {
                console.log("You lose! Paper beats rock!");
                result.textContent = "You lose! Paper beats rock!";
            } else {
                console.log("You win! Rock beats scissors!");
                result.textContent = "You win! Rock beats scissors!";
            }
            break;
        case "paper":
            if (computerChoice == "Paper") {
                console.log("It's a tie!");
                result.textContent = "It's a tie!"; 
            } else if (computerChoice == "Scissors") {
                console.log("You lose! Scissors beat paper!");
                result.textContent = "You lose! Scissors beat paper!";
            } else {
                console.log("You win! Paper beats rock!");
                result.textContent = "You win! Paper beats rock";
            }
            break;
        case "scissors":
            if (computerChoice == "Scissors") {
                console.log("It's a tie!");
                result.textContent = "It's a tie!"; 
            } else if (computerChoice == "Rock") {
                console.log("You lose! Rock beats scissors!");
                result.textContent = "You lose! Rock beats scissors!";
            } else {
                console.log("You win! Scissors beat paper!");
                result.textContent = "You win! Scissors beat paper!";
            }
            break;
    }
}

let buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => playRound(button.textContent, getComputerChoice()));
});