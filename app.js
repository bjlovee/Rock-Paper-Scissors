const Choices = {
    spock: {
        scissors: 'smashes',
        rock: 'vaporizes',
    },
    scissors: {
        paper: 'cuts',
        lizard: 'decapitates',
    },
    paper: {
        rock: 'covers',
        spock: 'disproves',
    },
    rock: {
        lizard: 'crushes',
        scissors: 'crushes',
    },
    lizard: {
        spock: 'poisons',
        paper: 'eats',
    },
};

const cpu = '';
let playerChoice  = null 
let score = [0, 0];

const player = '' 
const randomIndex = Math.floor(Math.random() * Choices.length);
player.currentChoice = Choices[0];
cpu.currentChoice = Choices[randomIndex];

function cpuChooses() {
    // const randomIndex = Math.floor(Math.random() * Choices.length);
    cpu.currentChoice = Choices[randomIndex];
    }

const rockBtn = document.getElementById('rock')
const paperBtn = document.getElementById('paper')
const scissorsBtn = document.getElementById('scissors')
const lizzardBtn = document.getElementById('lizard')
const spockBtn = document.getElementById('spock')

        // WIN CONDITION
 function compareChoices() { 
    cpuChooses()     
    const spockChoice = 'spock'
    if(spockChoice in Choices['scissors']) {
         // spoke beats this choice
    }
    if(spockChoice in Choices['rock']) {
        // spock beats this choice
    }

    const scissorsChoice = 'scissors'
    if(scissorsChoice in Choices['paper']) {
        //    scissors beat this choice  
    }
    if(scissorsChoice in Choices['lizard']) {
        //    scissors beat this choice  
    }

    const paperChoice = 'paper'
    if(paperChoice in Choices['rock']) {
         //    paper beat this choice  
    }
    if(paperChoice in Choices['spock']) {
        //    paper beat this choice  
    }
    
    const rockChoice = 'rock'
    if(rockChoice in Choices['lizard']) {
        //    rock beat this choice  
    }
    if(rockChoice in Choices['scissors']) {
        //    rock beat this choice  
    } 

    const lizardChoice = 'lizard'
    if(lizardChoice in Choices['spock']) {
        //    lizard beat this choice  
    }
    if(lizardChoice in Choices['paper']) {
        //    lizard beat this choice  
    } 
}

// function isWinner(player1, player2) {
//     return player2 in Choices[player1]
// }

function displayResult(result){
    const resultText = document.getElementById('#message');
    resultText.innerText = result;
    // document.body.appendChild(resultText);
  }

rockBtn.addEventListener('click', (evt) => {
    const isInput = evt.target.nodeName === 'INPUT';
    if (!isInput) {
        return;
    }
    player.currentChoice = evt.target.value;
compareChoices();
})

compareChoices();

