const playerChoiceDisplay = document.getElementById('player-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('.btnsStyle')
const playerScore = document.querySelector('#player-score')
const cpuScore = document.querySelector('#cpuScore')
// console.log(possibleChoices)

let player
let cpuChoice
let result
let plScore = 1;
let cpScore = 1;


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

const restartBtn = document.querySelector('#restart')

restartBtn.addEventListener('click', (event) => {
    window.location.reload();
 });

    function scoreDisplay() {
    if (player > cpuChoice) {
        playerScore.innerHTML = plScore++;
    } 
    if (cpuChoice > player) {
        cpuScore.innerHTML = cpScore++;
    } 
    getResult();
    console.log(scoreDisplay);
};



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
}

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
    if(player === 'lizard' && cpuChoice === 'spock') {
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
    if(cpuChoice === 'lizard' && player === 'spock') {
        result = 'Cpu wins!'
    }
    resultDisplay.innerHTML = result
};

