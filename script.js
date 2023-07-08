const getComputerChoice = () => {
    switch (Math.floor(Math.random() * 3)) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
};

const playRound = (playerChoice, computerChoice) => {
    const playerSelection = playerChoice.toLowerCase();
    const result = document.querySelector("div.result");
    switch (playerSelection) {
        case "rock":
            if (computerChoice == "Rock") {
                result.textContent = "It's a tie!"; 
                return 0;
            } else if (computerChoice == "Paper") {
                result.textContent = "You lose! Paper beats rock!";
                return -1;
            } else {
                result.textContent = "You win! Rock beats scissors!";
                return 1;
            }
        case "paper":
            if (computerChoice == "Paper") {
                result.textContent = "It's a tie!"; 
                return 0;
            } else if (computerChoice == "Scissors") {
                result.textContent = "You lose! Scissors beat paper!";
                return -1;
            } else {
                result.textContent = "You win! Paper beats rock";
                return 1;
            }
        case "scissors":
            if (computerChoice == "Scissors") {
                result.textContent = "It's a tie!"; 
                return 0;
            } else if (computerChoice == "Rock") {
                result.textContent = "You lose! Rock beats scissors!";
                return -1;
            } else {
                result.textContent = "You win! Scissors beat paper!";
                return 1;
            }
    }
};

const keepScore = (result) => {
    const playerScore = document.querySelector("div.score > p.player");
    let wins = parseInt(playerScore.textContent);
    const computerScore = document.querySelector("div.score > p.computer");
    let loses = parseInt(computerScore.textContent);

    const resultDiv = document.querySelector("div.result");

    let playAgain = document.createElement("button");
    playAgain.textContent = "Play again!";
    playAgain.addEventListener("click", () => {
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        winner.removeChild(playAgain);
        winner.textContent = "";
        resultDiv.textContent = "Start the game by choosing your weapon!"
    });
    
    let winner = document.querySelector("div.winner");
    if (wins == 5) {
        winner.textContent = "";
        resultDiv.textContent = "You won the game!";
        winner.appendChild(playAgain);
    } else if (loses == 5) {
        winner.textContent = "";
        resultDiv.textContent = "You lost the game!";
        winner.appendChild(playAgain);
    } else {
        switch (result) {
            case 1:
                wins++;
                playerScore.textContent = wins;
                break;
            case -1:
                loses++;
                computerScore.textContent = loses;
                break;
            default:
                break;
        }
    }
};

const buttons = document.querySelectorAll("button");
buttons.forEach(function (button) {
    button.addEventListener("click", () => {
        keepScore( playRound(button.className, getComputerChoice()) );
        setTimeout(() => keepScore(2), 100);
        button.id = "clicked";
        setTimeout(() => button.id = "", 100);
    });
});