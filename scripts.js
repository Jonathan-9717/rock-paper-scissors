'use strict'

// Create new function getComputerChoice which will return one of the following string values "rock", "paper", or "scissors"

let randomNum;
let computerChoice;
let humanChoice;
let computerScore = 0;
let humanScore = 0;

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

getComputerChoice();
console.log(randomNum);
console.log(computerChoice);

// Create a new function getHumanChoice that will returm one of the valid choices depending on what the user inputs

function getHumanChoice() {
    humanChoice = prompt("Choose: Rock, Paper, or Scissors");
};

getHumanChoice();
console.log(humanChoice);

// Create new function playRound that take two parameters, humanChoice and computerChoice

function playRound(computerChoice, humanChoice) {
    // Make parameters case-incensitve
    let lowercaseComputerChoice = computerChoice.toLowerCase();
    let lowercaseHumanChoice = humanChoice.toLowerCase();

    // playRound function should console.log a string value such as: "You lose! Paper beats Rock".
    if ((lowercaseComputerChoice === "rock" && lowercaseHumanChoice === "scissors") || (lowercaseComputerChoice === "paper" && lowercaseHumanChoice === "rock") || (lowercaseComputerChoice === "scissors" && lowercaseHumanChoice === "paper")) {
        console.log(`You lose ${lowercaseComputerChoice} beats ${lowercaseHumanChoice}`);
        computerScore ++;
    } else if((lowercaseHumanChoice === "rock" && lowercaseComputerChoice === "scissors") || (lowercaseHumanChoice === "paper" && lowercaseComputerChoice === "rock") || (lowercaseHumanChoice === "scissors" && lowercaseComputerChoice === "paper")) {
        console.log(`You win! ${lowercaseHumanChoice} beats ${lowercaseComputerChoice}`)
        humanScore ++;
    }

    // Increment the humanScore or computerScore
    console.log(`Human: ${humanScore} vs Computer: ${computerScore}`);

};

// Game will play 5 rounds. Create function name playGame that calls playRound to play 5 rounds, keeps scores and declares a winner at the end.

// Move playRound function and score variables so that they're declared inside of the new playGame function

