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
    switch (playerSelection) {
        case "rock":
            if (computerChoice == "Rock") {
                return 0;
            } else if (computerChoice == "Paper") {
                return -1;
            } else {
                return 1;
            }
        case "paper":
            if (computerChoice == "Paper") {
                return 0;
            } else if (computerChoice == "Scissors") {
                return -1;
            } else {
                return 1;
            }
        case "scissors":
            if (computerChoice == "Scissors") {
                return 0;
            } else if (computerChoice == "Rock") {
                return -1;
            } else {
                return 1;
            }
        default:
            return -2;
    }
}


const game = () => {
    let wins = 0;
    let loses = 0;
    let draws = 0;
    for (let i = 0; i < 5; i++) {
        const playerChoice = prompt("Your choice: ");
        const computerChoice = getComputerChoice();
        switch (playRound(playerChoice, computerChoice)) {
            case 1:
                console.log("You win!");
                wins++;
                console.log(`Score: You ${wins} - ${loses} Computer`);
                break;
            case -1:
                console.log("You lose!");
                loses++;
                console.log(`Score: You ${wins} - ${loses} Computer`);
                break;
            case 0:
                console.log("It's a tie!");
                draws++;
                console.log(`Score: You ${wins} - ${loses} Computer`);
                break;
            default:
                i--;
                continue;
        }
    }

    if (wins == loses) {
        console.log("It's a draw, play again!");
        game();
    }
    
    console.log(`Score: You ${wins} - ${loses} Computer`);
}

game();