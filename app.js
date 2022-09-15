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
    result = 'its a draw!'
    }
    if(player === 'spock' && cpuChoice === 'scissors') {
        result = 'player wins!'
    }
    if(player === 'spock' && cpuChoice === 'rock') {
        result = 'player wins!'
    }
    if(player === 'scissors' && cpuChoice === 'paper') {
        result = 'player wins!'
    }
    if(player === 'scissors' && cpuChoice === 'lizaed') {
        result = 'player wins!'
    }
    if(player === 'paper' && cpuChoice === 'rock') {
        result = 'player wins!'
    }
    if(player === 'paper' && cpuChoice === 'spock') {
        result = 'player wins!'
    }
    if(player === 'rock' && cpuChoice === 'lizzard') {
        result = 'player wins!'
    }
    if(player === 'rock' && cpuChoice === 'scissors') {
        result = 'player wins!'
    }
    if(player === 'lizzard' && cpuChoice === 'spock') {
        result = 'player wins!'
    }
    if(player === 'lizzard' && cpuChoice === 'spock') {
        result = 'player wins!'
    }
    if(player === cpuChoice) {
        result = 'its a draw!'
    }
    if(cpuChoice === 'spock' && player === 'scissors') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'spock' && player === 'rock') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'scissors' && player === 'paper') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'scissors' && player === 'lizaed') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'rock') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'paper' && player === 'spock') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'lizzard') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'rock' && player === 'scissors') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'lizzard' && player === 'spock') {
        result = 'cpu wins!'
    }
    if(cpuChoice === 'lizzard' && player === 'spock') {
        result = 'cpu wins!'
    }
    resultDisplay.innerHTML = result
}