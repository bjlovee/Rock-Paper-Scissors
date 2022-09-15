const playerChoice = document.getElementById('player-choice')
const cpuChoiceDisplay = document.getElementById('cpu-choice')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')

let player
let cpuChoice
let result

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
player = e.target.id
playerChoice.innerHTML = player
generateCpuChoice();
getResult()
}));

function generateCpuChoice() {
    const randomNumber = Math.floor(Math.random() * 5)
    console.log(randomNumber)
}

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const lizzardBtn = document.getElementById('lizard')
const spockBtn = document.getElementById('spock')


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
        cpuChoice = 'lizzard'
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
    if(player === 'scissors' && cpuChoice === 'lizaed') {
        result = 'Player wins!'
    }
    if(player === 'paper' && cpuChoice === 'rock') {
        result = 'Player wins!'
    }
    if(player === 'paper' && cpuChoice === 'spock') {
        result = 'Player wins!'
    }
    if(player === 'rock' && cpuChoice === 'lizzard') {
        result = 'Player wins!'
    }
    if(player === 'rock' && cpuChoice === 'scissors') {
        result = 'Player wins!'
    }
    if(player === 'lizzard' && cpuChoice === 'spock') {
        result = 'Player wins!'
    }
    if(player === 'lizzard' && cpuChoice === 'spock') {
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
    if(cpuChoice === 'scissors' && player === 'lizaed') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'rock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'spock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'lizzard') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'scissors') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'lizzard' && player === 'spock') {
        result = 'Cpu wins!'
    }
    if(cpuChoice === 'lizzard' && player === 'spock') {
        result = 'Cpu wins!'
    }
    resultDisplay.innerHTML = result
}