// DOM ELEMENTS
const playerChoiceDisplay = document.getElementById('player-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.btnsStyle')
const playerScore = document.querySelector('#player-score')
const cpuScore = document.querySelector('#cpuScore')

// VARIABLES
let player
let cpuChoice
let result
let plScore = 1;
let cpScore = 1;

// GAME FUNCTION 
possibleChoices.forEach(possibleChoice => {
    possibleChoice.addEventListener('click', (e) => {
        player = e.target.id
        playerChoiceDisplay.innerHTML = `Player choice: ${player}`;
        generateCpuChoice();
        getResult();
        scoreDisplay();
        console.log(possibleChoices)
    })
});

// RESTART FUNCTION 
const restartBtn = document.querySelector('#restart')
restartBtn.addEventListener('click', (event) => {
    window.location.reload();
});
   
// SCORE FUNCTION 
function scoreDisplay() {
    if (result === 'Player wins!') {
        playerScore.innerHTML = plScore++;
    };
    if (result === 'Cpu wins!') {
        cpuScore.innerHTML = cpScore++;
    };
    console.log(scoreDisplay);
};

// COMPUTER CHOICE FUNCTION 
function generateCpuChoice() {
    const randomNumber = Math.floor(Math.random() * 5) + 1

    if(randomNumber === 1) {
        cpuChoice = 'rock'
    }
    if(randomNumber === 2) {
        cpuChoice = 'paper'
    }
    if(randomNumber === 3) {
        cpuChoice = 'scissors'
    }
    if(randomNumber === 4) {
        cpuChoice = 'lizard'
    }
    if(randomNumber === 5) {
        cpuChoice = 'spock'
    }
    cpuChoiceDisplay.innerHTML = cpuChoice
};

// WIN CONDITIONS
function getResult() {
    if(player === cpuChoice) {
        result = 'Its a draw!'
    } 
    if(player === 'spock' && cpuChoice === 'scissors') {
        result = 'Player wins!'
    }
    if(player === 'spock' && cpuChoice === 'rock') {
        result = 'Player wins!'
    }
    if(player === 'scissors' && cpuChoice === 'paper') {
        result = 'Player wins!'
    }
    if(player === 'scissors' && cpuChoice === 'lizard') {
        result = 'Player wins!'
    }
    if(player === 'paper' && cpuChoice === 'rock') {
        result = 'Player wins!'
    }
    if(player === 'paper' && cpuChoice === 'spock') {
        result = 'Player wins!'
    }
    if(player === 'rock' && cpuChoice === 'lizard') {
        result = 'Player wins!'
    }
    if(player === 'rock' && cpuChoice === 'scissors') {
        result = 'Player wins!'
    }
    if(player === 'lizard' && cpuChoice === 'spock') {
        result = 'Player wins!'
    }
    if(player === 'lizard' && cpuChoice === 'paper') {
        result = 'Player wins!'
    }
    if(cpuChoice === 'spock' && player === 'scissors') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'spock' && player === 'rock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'scissors' && player === 'paper') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'scissors' && player === 'lizard') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'rock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'spock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'lizard') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'scissors') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'lizard' && player === 'spock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'lizard' && player === 'paper') {
        result = 'Cpu wins!'
    }
    resultDisplay.innerHTML = result;
    console.log(getResult);
};


