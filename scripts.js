'use strict'

// Create new function getComputerChoice which will return one of the following string values "rock", "paper", or "scissors"

let randomNum;
let computerChoice;
let humanChoice;


function getComputerChoice() {
    randomNum = Math.floor(Math.random() * 3 + 1);
    if (randomNum === 1) {
        return computerChoice = "Rock";
    } else if (randomNum === 2) {
        return computerChoice = "Paper";
    } else if (randomNum === 3) {
        return computerChoice = "Scissors";
    };
};



// Create a new function getHumanChoice that will returm one of the valid choices depending on what the user inputs

function getHumanChoice() {
    humanChoice = prompt("Choose: Rock, Paper, or Scissors");
};



// Create new function playRound that take two parameters, humanChoice and computerChoice



function playGame() {
    let computerScore = 0;
    let humanScore = 0;
    for(let i =1; i <= 5; i++) {
        function playRound(computerChoice, humanChoice) {
            // Make parameters case-incensitve
            let lowercaseComputerChoice = computerChoice.toLowerCase();
            let lowercaseHumanChoice = humanChoice.toLowerCase();
        
            // playRound function should console.log a string value such as: "You lose! Paper beats Rock".
            if ((lowercaseComputerChoice === "rock" && lowercaseHumanChoice === "scissors") || (lowercaseComputerChoice === "paper" && lowercaseHumanChoice === "rock") || (lowercaseComputerChoice === "scissors" && lowercaseHumanChoice === "paper")) {
                console.log(`You lose this round! ${lowercaseComputerChoice} beats ${lowercaseHumanChoice}`);
                computerScore ++;
            } else if((lowercaseHumanChoice === "rock" && lowercaseComputerChoice === "scissors") || (lowercaseHumanChoice === "paper" && lowercaseComputerChoice === "rock") || (lowercaseHumanChoice === "scissors" && lowercaseComputerChoice === "paper")) {
                console.log(`You win this round! ${lowercaseHumanChoice} beats ${lowercaseComputerChoice}`)
                humanScore ++;
            } else {
                console.log("Draw");
            }
        
            // Increment the humanScore or computerScore
            console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);
        
        };

        console.log(`Round ${i}`);

        getComputerChoice();
        // console.log(randomNum);
        // console.log(computerChoice);

        getHumanChoice();
        // console.log(humanChoice);
        
        playRound(computerChoice, humanChoice);
    };

    if (humanScore > computerScore) {
        console.log(`You won the Game! ${humanScore} to ${computerScore}`);
    } else if (computerScore > humanScore) {
        console.log(`You lost ${computerScore} to ${humanScore} :(. Try again!`);
    } else {
        console.log("Tied Game");
    }
};

playGame();